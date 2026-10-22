Below are bugfixes and general changes for app version 0.0.0.

[x] Ensure that deck cards always shuffled whether for `Practice` or `Test` before showing them to the user:
     1. when first starting a practice/test deck; or
	 2. before starting a second pass of a practice deck (i.e. after completing a pass of all cards in the practice deck and starting another pass).

[x] Only if possible and only if you think it will make any difference, completely skip processing the seed file if offline. If it's being loaded from a local cache, we should expect it to match the data in IndexedDB.
     → Not changed: offline, the diff and write are already skipped; only a few ms of parsing remain. See `decisions.md`.

[x] Swap the "Single: Swipe left" and "Single: Swipe right" actions. I got these reversed in the SPEC document.

[x] Modify on-screen test buttons: put them in the order below (left-to-right); add colors; add gesture hints:
     1. Again:
			color: light grey, black text;
			hint: ⌾⌾ (U+233E APL FUNCTIONAL SYMBOL CIRCLE JOT)
	 2. Hard:
			color: dark red background, white text;
			hint: ⇊ (U+21CA DOWNWARD PAIRED ARROWS)
	 3. Good:
			color: unchanged;
			hint: ⇉ (U+21C9 RIGHTWARD PAIRED ARROWS)
	 4. Easy:
	 		color: light blue background, black text;
			hint: ⇈ (U+21C8 UPWARD PAIRED ARROWS)


[ ] Add the "Prefered voice" for Thai (necessary for Android). Should be `['Kanya', 'Thai Thailand']`.

[ ] Have all warning messages (e.g. Prefered voice not found) self-dismiss after 10 seconds if not dismissed by user.

[ ] When listening using TWS Bluetooth audio, the earphones can go to sleep after a period of inactivity. I propose adding a new setting to the settings page:

    "Poke Bluetooth device before playing audio" (`enableWake` -- default `false`)

    Then, prior to any requested calls to `speechSynthesis.speak()` call an async function first that performs at least these steps:
	 1. if a `SpeechSynthesisUtterance` is currently ongoing, resolve immediately and return;
	 2. if `enableWake` is false, resolve immediately and return;
	 3. if less than `2000` milliseconds have elapsed since the end of the last SpeechSynthesisUtterance, resolve immediately and return;
	 4. call `setTimeout(resolve, 300)` while also immediately playing an empty `SpeechSynthesisUtterance`  (i.e. force SpeechSynthesis to send silent utterance data to the audio output and allow 300ms to elapse before playing any audible speech utterances)

[ ] Make all LEARNING cards testable from the main menu screen, even if they have been seen fewer than three times. However, don't show the test button until the cards in the deck have all been seen at least three times.

[ ] In the table view, break down the filters by direction. `ALL` and `HIDDEN` can remain as is but below that show `TH->EN`: `NEW` `LEARNING` `REVIEW` `RELEARN` and then `EN->TH`: `NEW` `LEARNING` `REVIEW` `RELEARN`.

[ ] When viewing the word details:
     1. make the example region clickable and play the Thai example when clicked; and
	 2. remove the English play button.
	 3. remove dedicated column for hidden cards. Instead, put `HIDDEN` in place of the `Th→En` `En→Th` information (i.e. `colspan="2"`)
