import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import { localDay } from '../../services/dates';
import {
	createExport,
	importExport,
	validateExport,
} from '../../services/export';
import {
	RATE_MAX,
	RATE_MIN,
	ratesOf,
	saveSettings,
} from '../../services/settings';
import { speech } from '../../services/speech';
import type { AppContext, Language, Settings } from '../../types';
import { confirmDialog } from '../confirm-dialog/confirm-dialog';
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
		this.bindData();
	}

	protected override onUnmount(): void {
		speech.cancel();
	}

	private bindData(): void {
		const file = this.query<HTMLInputElement>('.data-file');
		this.query('.data-export').addEventListener('click', () => {
			void this.exportProgress();
		});
		this.query('.data-import').addEventListener('click', () =>
			file.click(),
		);
		file.addEventListener('change', () => {
			const chosen = file.files?.[0];
			// Reset so choosing the same file again still fires `change`.
			file.value = '';
			if (chosen) {
				void this.importProgress(chosen);
			}
		});
	}

	private setDataStatus(text: string): void {
		this.query('.data-status').textContent = text;
	}

	private async exportProgress(): Promise<void> {
		try {
			const data = await createExport(this.app.db);
			const blob = new Blob([JSON.stringify(data, null, '\t')], {
				type: 'application/json',
			});
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = `thai-flashcards-progress-${localDay(Date.now())}.json`;
			link.click();
			// Give the download time to start before releasing the blob.
			window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
			this.setDataStatus(
				`Exported ${data.progress.length} progress records.`,
			);
		} catch (error) {
			console.error('Export failed:', error);
			this.setDataStatus('Export failed. Please try again.');
		}
	}

	private async importProgress(chosen: File): Promise<void> {
		let parsed: unknown;
		try {
			parsed = JSON.parse(await chosen.text());
		} catch {
			this.setDataStatus(`${chosen.name} is not a valid JSON file.`);
			return;
		}
		const result = validateExport(parsed);
		if (!result.ok) {
			this.setDataStatus(
				`${chosen.name} cannot be imported:\n${result.errors.join('\n')}`,
			);
			return;
		}
		const { file } = result;
		const exported = new Date(file.exportedAt).toLocaleString();
		const confirmed = await confirmDialog({
			title: 'Replace all progress?',
			message: `This replaces all progress on this device with ${file.progress.length} records exported ${exported}.\nThis cannot be undone.`,
			confirmLabel: 'Replace',
		});
		if (!confirmed) {
			this.setDataStatus('Import cancelled.');
			return;
		}
		try {
			const { imported, ignored } = await importExport(this.app.db, file);
			this.setDataStatus(
				`Imported ${imported} progress records.` +
					(ignored > 0
						? ` ${ignored} entries were for words not in this word list and were skipped.`
						: ''),
			);
		} catch (error) {
			console.error('Import failed:', error);
			this.setDataStatus('Import failed; your progress was not changed.');
		}
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
