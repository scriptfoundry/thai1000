import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { pickVoice, type VoiceLike } from './speech';

const voice = (name: string, lang: string, voiceURI = name): VoiceLike => ({
	name,
	lang,
	voiceURI,
});

describe('pickVoice', () => {
	test('macOS: matches preferred names inside voiceURI', () => {
		const voices = [
			voice(
				'Samantha',
				'en-US',
				'com.apple.voice.compact.en-US.Samantha',
			),
			voice('Moira', 'en-IE', 'com.apple.voice.compact.en-IE.Moira'),
			voice('Kanya', 'th-TH', 'com.apple.voice.compact.th-TH.Kanya'),
		];
		assert.equal(pickVoice(voices, 'english').voice?.name, 'Moira');
		assert.deepEqual(pickVoice(voices, 'thai'), {
			voice: voices[2],
			preferred: true,
		});
	});

	test('Android: matches the Thai Thailand voice', () => {
		const voices = [
			voice('English United States', 'en-US'),
			voice('Thai Thailand', 'th-TH'),
		];
		assert.deepEqual(pickVoice(voices, 'thai'), {
			voice: voices[1],
			preferred: true,
		});
	});

	test('first preferred entry wins over later ones', () => {
		const voices = [
			voice('Moira', 'en-IE'),
			voice('English Australia', 'en-AU'),
		];
		assert.equal(
			pickVoice(voices, 'english').voice?.name,
			'English Australia',
		);
	});

	test('falls back to the first voice of the language', () => {
		const voices = [
			voice('Deutsch', 'de-DE'),
			voice('English United States', 'en-US'),
			voice('ภาษาไทย', 'th_TH'),
		];
		assert.deepEqual(pickVoice(voices, 'english'), {
			voice: voices[1],
			preferred: false,
		});
		assert.equal(pickVoice(voices, 'thai').voice?.name, 'ภาษาไทย');
	});

	test('reports no voice when none match the language', () => {
		assert.deepEqual(pickVoice([voice('Deutsch', 'de-DE')], 'thai'), {
			voice: null,
			preferred: false,
		});
	});
});
