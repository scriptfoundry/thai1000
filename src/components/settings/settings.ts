import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import {
	RATE_MAX,
	RATE_MIN,
	ratesOf,
	saveSettings,
} from '../../services/settings';
import { speech } from '../../services/speech';
import type { AppContext, Language, Settings } from '../../types';
import SETTINGS_CONTENTS from './settings.html?raw';
import './settings.scss';

const SAMPLES: Record<Language, string> = {
	thai: 'สวัสดีครับ ยินดีที่ได้รู้จัก',
	english: 'Hello, nice to meet you.',
};

const RATE_KEY: Record<Language, keyof Settings> = {
	thai: 'thaiRate',
	english: 'englishRate',
};

const LANGUAGES: readonly Language[] = ['thai', 'english'];

export default class SettingsScreen extends BaseComponent {
	private readonly app: AppContext;

	constructor(app: AppContext) {
		super(SETTINGS_CONTENTS, {
			className: 'screen settings-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
		this.app = app;
	}

	protected override onMount(): void {
		for (const language of LANGUAGES) {
			this.bindVoice(language);
		}
		this.query('.app-version').textContent = __APP_VERSION__;
	}

	protected override onUnmount(): void {
		speech.cancel();
	}

	private bindVoice(language: Language): void {
		const block = this.query(`.voice[data-language="${language}"]`);
		const find = <T extends Element>(selector: string): T => {
			const found = block.querySelector<T>(selector);
			if (!found) {
				throw new Error(`Missing ${selector} for ${language}`);
			}
			return found;
		};

		const { voice, preferred } = speech.voiceFor(language);
		find('.voice-name').textContent = voice
			? `${voice.name} (${voice.lang})${preferred ? '' : ' — fallback'}`
			: 'No voice installed';

		const key = RATE_KEY[language];
		const input = find<HTMLInputElement>('input[type="range"]');
		const output = find<HTMLOutputElement>('output');
		input.min = String(RATE_MIN);
		input.max = String(RATE_MAX);
		input.value = String(this.app.settings[key]);
		output.value = this.app.settings[key].toFixed(2);

		input.addEventListener('input', () => {
			this.app.settings[key] = Number(input.value);
			output.value = this.app.settings[key].toFixed(2);
			speech.setRates(ratesOf(this.app.settings));
		});
		input.addEventListener('change', () => {
			saveSettings(this.app.db, this.app.settings).catch(
				(error: unknown) =>
					console.error('Saving settings failed:', error),
			);
		});

		const sample = find<HTMLButtonElement>('.voice-sample');
		sample.disabled = !voice;
		sample.addEventListener('click', () => {
			void speech.speak(SAMPLES[language], language);
		});
	}
}
