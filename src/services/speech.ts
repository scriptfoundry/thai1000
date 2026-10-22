/**
 * SpeechSynthesis with locally available voices only. Every new utterance
 * cancels the previous one.
 */
import type { Language } from '../types';

/** Preferred voices, first match wins (matched against voiceURI or name). */
export const ENGLISH_VOICES = ['English Australia', 'Moira'];
// 'Thai Thailand' is the Android name.
export const THAI_VOICES = ['Kanya', 'Thai Thailand'];

const PREFERRED: Record<Language, readonly string[]> = {
	english: ENGLISH_VOICES,
	thai: THAI_VOICES,
};
const LANG_PREFIX: Record<Language, string> = { english: 'en', thai: 'th' };
const LANGUAGE_NAME: Record<Language, string> = {
	english: 'English',
	thai: 'Thai',
};

/** Chrome may never fire `voiceschanged` when voices are already loaded. */
const VOICES_TIMEOUT_MS = 2000;

/** Silence after which Bluetooth earphones may have gone to sleep. */
export const WAKE_IDLE_MS = 2000;
/** Time a poked device gets before audible speech starts. */
export const WAKE_DELAY_MS = 300;

export interface WakeCheck {
	/** An utterance is in progress, so the device is already awake. */
	speaking: boolean;
	/** The `enableWake` setting. */
	enabled: boolean;
	now: number;
	/** When the last utterance ended, or null if none has. */
	lastEndedAt: number | null;
}

/** Whether to poke the audio device before speaking. */
export const needsWake = ({
	speaking,
	enabled,
	now,
	lastEndedAt,
}: WakeCheck): boolean =>
	!speaking &&
	enabled &&
	(lastEndedAt === null || now - lastEndedAt >= WAKE_IDLE_MS);

/** The subset of SpeechSynthesisVoice used here, so tests can fake it. */
export interface VoiceLike {
	name: string;
	voiceURI: string;
	lang: string;
}

export interface VoiceChoice<V extends VoiceLike = VoiceLike> {
	voice: V | null;
	/** False when no preferred voice exists and a fallback (or nothing) is used. */
	preferred: boolean;
}

/** First preferred voice by substring match, else the first voice of that language. */
export const pickVoice = <V extends VoiceLike>(
	voices: readonly V[],
	language: Language,
): VoiceChoice<V> => {
	for (const wanted of PREFERRED[language]) {
		const needle = wanted.toLowerCase();
		const match = voices.find(
			(voice) =>
				voice.voiceURI.toLowerCase().includes(needle) ||
				voice.name.toLowerCase().includes(needle),
		);
		if (match) {
			return { voice: match, preferred: true };
		}
	}
	const prefix = LANG_PREFIX[language];
	const fallback = voices.find((voice) =>
		voice.lang.toLowerCase().startsWith(prefix),
	);
	return { voice: fallback ?? null, preferred: false };
};

const loadVoices = (): Promise<SpeechSynthesisVoice[]> =>
	new Promise((resolve) => {
		const synth = window.speechSynthesis;
		const voices = synth.getVoices();
		if (voices.length > 0) {
			resolve(voices);
			return;
		}
		const finish = (): void => {
			synth.removeEventListener('voiceschanged', finish);
			window.clearTimeout(timer);
			resolve(synth.getVoices());
		};
		const timer = window.setTimeout(finish, VOICES_TIMEOUT_MS);
		synth.addEventListener('voiceschanged', finish);
	});

export class Speech {
	private choices: Record<Language, VoiceChoice<SpeechSynthesisVoice>> = {
		english: { voice: null, preferred: false },
		thai: { voice: null, preferred: false },
	};
	private rates: Record<Language, number> = { english: 1, thai: 1 };
	/** Held so Chrome doesn't garbage-collect it before `end` fires. */
	private current: SpeechSynthesisUtterance | null = null;
	private wakeEnabled = false;
	private lastEndedAt: number | null = null;
	/** Bumped by speak() and cancel(), so a speak waiting on wake() knows it was superseded. */
	private generation = 0;

	public get supported(): boolean {
		return typeof window !== 'undefined' && 'speechSynthesis' in window;
	}

	/** Load voices and choose one per language. Returns user-facing warnings. */
	public async init(): Promise<string[]> {
		if (!this.supported) {
			return ['Speech is not available in this browser.'];
		}
		const voices = await loadVoices();
		const warnings: string[] = [];
		for (const language of ['thai', 'english'] as const) {
			const choice = pickVoice(voices, language);
			this.choices[language] = choice;
			const name = LANGUAGE_NAME[language];
			if (!choice.voice) {
				warnings.push(`No ${name} voice is installed.`);
			} else if (!choice.preferred) {
				warnings.push(
					`Preferred ${name} voice not found; using ${choice.voice.name}.`,
				);
			}
		}
		return warnings;
	}

	public voiceFor(language: Language): VoiceChoice<SpeechSynthesisVoice> {
		return this.choices[language];
	}

	public setRates(rates: Record<Language, number>): void {
		this.rates = { ...rates };
	}

	public setWake(enabled: boolean): void {
		this.wakeEnabled = enabled;
	}

	/** Speak each part in turn; stops if one is cut short. */
	public async speakAll(
		parts: readonly (readonly [text: string, language: Language])[],
	): Promise<void> {
		for (const [text, language] of parts) {
			if (!(await this.speak(text, language))) {
				return;
			}
		}
	}

	/**
	 * Call from a user gesture (the Start tap): Chrome on Android blocks
	 * speech until one has happened.
	 */
	public unlock(): void {
		if (!this.supported) {
			return;
		}
		const silent = new SpeechSynthesisUtterance('');
		silent.volume = 0;
		window.speechSynthesis.speak(silent);
	}

	public cancel(): void {
		if (this.supported) {
			this.generation++;
			this.current = null;
			window.speechSynthesis.cancel();
		}
	}

	/**
	 * With `enableWake`, play an empty utterance and wait WAKE_DELAY_MS so
	 * Bluetooth earphones that went to sleep are awake for the real speech.
	 * Resolves at once if speech is in progress, waking is off, or the last
	 * utterance ended less than WAKE_IDLE_MS ago.
	 */
	private wake(voice: SpeechSynthesisVoice): Promise<void> {
		const synth = window.speechSynthesis;
		const check: WakeCheck = {
			speaking: this.current !== null || synth.speaking,
			enabled: this.wakeEnabled,
			now: Date.now(),
			lastEndedAt: this.lastEndedAt,
		};
		if (!needsWake(check)) {
			return Promise.resolve();
		}
		return new Promise((resolve) => {
			window.setTimeout(resolve, WAKE_DELAY_MS);
			const silent = new SpeechSynthesisUtterance('');
			silent.voice = voice;
			silent.lang = voice.lang;
			synth.speak(silent);
		});
	}

	/**
	 * Speak after cancelling anything in progress. Resolves when done or
	 * interrupted: true unless another speak() or cancel() cut it short.
	 */
	public async speak(text: string, language: Language): Promise<boolean> {
		const { voice } = this.choices[language];
		if (!this.supported || !voice || text.trim() === '') {
			this.cancel();
			return true;
		}
		const generation = ++this.generation;
		await this.wake(voice);
		if (generation !== this.generation) {
			// Another speak() or cancel() happened while waking.
			return false;
		}
		this.cancel();
		return new Promise((resolve) => {
			const utterance = new SpeechSynthesisUtterance(text);
			utterance.voice = voice;
			utterance.lang = voice.lang;
			utterance.rate = this.rates[language];
			const finish = (): void => {
				// cancel() clears `current` before the interrupted utterance ends.
				const completed = this.current === utterance;
				if (completed) {
					this.current = null;
				}
				this.lastEndedAt = Date.now();
				resolve(completed);
			};
			utterance.onend = finish;
			utterance.onerror = finish;
			this.current = utterance;
			window.speechSynthesis.speak(utterance);
		});
	}
}

/** App-wide instance. */
export const speech = new Speech();
