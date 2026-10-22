# Manual test pass

Automated checks: `yarn lint`, `yarn tsc --noEmit`, `yarn test` and `yarn build`. The checks below need a real browser.

## Setup

- **macOS Chrome:** `yarn build && yarn preview`, then open http://localhost:4173. Service workers only run in production builds; `yarn dev` skips them.
- **Android Chrome:** service workers need HTTPS or `localhost`. Connect the phone by USB, open `chrome://inspect/#devices` on the Mac, and add port forwarding `4173 → localhost:4173`. Then open http://localhost:4173 on the phone.
- To start from scratch: DevTools → Application → Storage → **Clear site data**.

## First run and seed (§3, §14)

- [ ] First launch shows "Loading words…", then Start becomes enabled.
- [ ] DevTools → Application → IndexedDB → `thai-flashcards`: `cards` has 999 entries and `meta.seedVersion` is 1.
- [ ] Clear site data, go offline, reload: an error message and "Try again" appear (no crash).
- [ ] Bump `#seedVersion` to 2, edit one row with a higher `version`, delete one row, add one row, then `yarn build` and reload. The DB shows the added, updated and removed cards. Progress and hidden/queued flags of the edited card are unchanged.
- [ ] Offline after a successful launch: the app starts with a warning banner.

## Speech (§9)

- [ ] Settings shows Kanya (Thai) and Moira or English Australia, without "fallback".
- [ ] Both "Play sample" buttons speak; rate changes are audible and survive a reload.
- [ ] Android: the first card speaks right after Start (the speech unlock works).

## Practice (§7, §8)

- [ ] Practice → Thai → English: up to 15 cards, at most 10 new, and the front shows no text but speaks Thai.
- [ ] → / swipe left: back shows Thai and English and speaks English; again moves to the next card.
- [ ] ← / swipe right: front of the previous card. Space / double tap: replay.
- [ ] Two-finger gestures and triple taps do nothing in practice.
- [ ] After 3 rounds, "Test this deck" appears.
- [ ] English → Thai practice on a fresh install shows the "appear once a word passes" message.

## Test (§7, §8, §14)

- [ ] Grades only work on the back. Shift+→ / 2-finger right = Good, Shift+↑ / 2-finger up = Easy, Shift+↓ / 2-finger down = Hard, Shift+Space / 2-finger double tap = Again.
- [ ] Close the tab mid-test, reopen: the cards already rated keep their new status (Words screen).
- [ ] Summary shows memorized / failed, with Another test deck (when more are ready), Practice and Home.
- [ ] A passed card shows REVIEW. A failed card shows RELEARN and is **first** in the next practice deck.
- [ ] After practising Thai → English today, English → Thai for that word is skipped until tomorrow.

## Words (§11)

- [ ] Scrolling to the end of ALL shows 999 rows smoothly on the phone.
- [ ] Each filter chip count matches the rows it shows.
- [ ] Dialog: Hide moves the word to HIDDEN and out of decks. Unhide restores it.
- [ ] Queue on a NEW word: it appears first among the new cards of the next practice deck, and the queued flag clears once its back is shown.
- [ ] Reset to NEW needs two taps, then both directions are NEW.

## Export / import (§12, §14)

- [ ] Export downloads a JSON file with `format: 1`, progress and flags, and no word text.
- [ ] Reset a few words, then import the file and confirm: Words statuses and Home counts match the export exactly.
- [ ] Importing a non-JSON or edited-invalid file shows the reasons and changes nothing.

## PWA (§10)

- [ ] Chrome offers Install; the installed app opens standalone with the blue theme colour.
- [ ] Installed and offline: the app opens, practice and tests work.
- [ ] Change any source file, `yarn build`, reload once: the "A new version is available" banner appears, and Reload switches to the new version. Without tapping Reload, nothing reloads by itself.

## Look (§1)

- [ ] All text is `#1c4f82`; borders and buttons are `#69b0f8`; light theme only.
- [ ] Screens slide and fade (~300ms); cards slide (~200ms).
