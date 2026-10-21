/**
 * SpeechSynthesis with locally available voices only. Every new utterance
 * cancels the previous one.
 */
import type { Language } from '../types';

/** Preferred voices, first match wins (matched against voiceURI or name). */
export const ENGLISH_VOICES = ['English Australia', 'Moira'];
export const THAI_VOICES = ['Kanya'];

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
			this.current = null;
			window.speechSynthesis.cancel();
		}
	}

	/** Speak after cancelling anything in progress; resolves when done or interrupted. */
	public speak(text: string, language: Language): Promise<void> {
		this.cancel();
		const { voice } = this.choices[language];
		if (!this.supported || !voice || text.trim() === '') {
			return Promise.resolve();
		}
		return new Promise((resolve) => {
			const utterance = new SpeechSynthesisUtterance(text);
			utterance.voice = voice;
			utterance.lang = voice.lang;
			utterance.rate = this.rates[language];
			const finish = (): void => {
				if (this.current === utterance) {
					this.current = null;
				}
				resolve();
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
