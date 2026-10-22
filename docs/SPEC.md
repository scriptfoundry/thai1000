# Thai Top-1000 Flashcards — Application Specification

Audience: an AI coding agent. Read this whole document before writing code. Where this document is silent, choose the simplest option that fits the principles below and record the decision in `docs/decisions.md`.

## 1. Purpose and principles

An audio-first flash-card PWA for learning the 1000 most frequent Thai words, with the Free Spaced Repetition Scheduler algorithm (FSRS) available in some flashcard software like Anki.

- **Audio first.** Cards show text on both front and back, but when a new card appears, its text will also immediately be read aloud.
- **Gesture first.** Cards can be cycled and interacted with by multi-touch pointer gestures as well as with buttons.
- **Few dependencies.** Runtime dependencies: none if possible. Dev dependencies are limited to those already installed (`vite`, `vite-plugin-pwa`, `sass-embedded`, `biome`, `typescript`). Adding any other package requires a written justification in `docs/decisions.md`. Do not add a router, UI library, state library, IndexedDB wrapper, FSRS library, or test framework without that justification.
- **Primary target:** Chrome on Android using touch. **Secondary:** Chrome on macOS (development and testing) using keyboard (and pointer).
- **Look:** simple, bright, light theme only (no dark mode, no `prefers-color-scheme` handling). All text color is `#1c4f82`. Border color and button color is `#69b0f8` but is easily configurable. Favor CSS variables over Sass variables. Use of Sass `@mixin` and `@function` is allowed, where needed. No component library. Favor semantic HTML (`<main>`, `<nav>`, `<button>`, `<table>`, `<dialog>`, etc.) where possible.

## 2. Tooling and repository

- Package manager: **yarn**. Build: **Vite** + **vite-plugin-pwa**. Language: **strict TypeScript** (no `any`, no non-null assertions without a comment). Styling: **Sass** (`sass-embedded`). Lint/format: **Biome**.
- The prepared Vite project, dev dependencies, and config files (vite, biome, sass, tsconfig) already exist. Change config files where needed (e.g. PWA options) but document all changes. A simple example implementation of a HTML component (including typescript class, style and html body) is available at `/src/components/title/` but this can be modified or augmented as required.
- Git: **commit only to the `dev` branch** (it already exists). Keep commit messages terse. Never touch `main`. Never merge, rebase or force-push. Make logically separate commits with clear messages. Strongly favor small commits over larger ones. Run `yarn biome check` and `yarn tsc --noEmit` before each commit. If a bug or format issue cannot be resolved in two attempts, stop and allow the user to assess the issue.

- Directory layout:

```
/dist          bundled output (generated)
/docs          application specs and agent feedback (SPEC.md, decisions.md, etc.)
/extras        non-app materials (docs, notes, source images)
/public        static assets, including the seed file (public/seed.tsv)
/src
  /components  one folder per component with predictable contents: name.ts, name.html, name.scss
  /styles      top-level Sass (variables, reset, typography, transitions)
  /types       shared types spanning components
  /services    non-UI logic (db, seed, fsrs, scheduler, speech, router, settings, export)
```

- Component convention: `name.html` is an HTML fragment imported with Vite's `?raw` suffix; `name.ts` exports a component with `mount(parent)` / `unmount()` and owns its own logic and types; `name.scss` holds only that component's styles. Add additional method/function arguments as needed?

## 3. Seed data

- File: `public/data/seed.tsv`, fetched with the Fetch API at every app start (precached for offline use, see §10).
- Tab-delimited. **Line 1** is a non-data metadata line: `#seedVersion<TAB><integer>`. **Line 2** is a header row. All other lines are data rows.
- Columns in order: `id, version, thai, english, thaiExample, englishExample`, `category`.
- **Store** store all values, but display `thaiExample`, `englishExample` and `category` only in the dialog view of the words list.
- Ordering: lower `id` = lower frequency = lower priority. Higher `id` = higher priority. Words added later get higher ids and are therefore prioritised automatically.
- Parse defensively: expect data to be UTF-8, skip blank lines, trim values, report malformed rows to the console, and never crash the app on a bad row.

### Seed sync (on every start if online)

1. On first launch if seed file is not found or the network is unavailable, halt and show the error a fatal error message.
2. On subsequent launches, show a warning if the seed file or network is unavailable and continue launching the application.
3. Fetch and parse the seed. Compare `#seedVersion` with the value stored in the `meta` store. If equal, skip the diff (fast path).
4. Otherwise diff by `id`:
   - **Added** (in seed, not in DB): insert the card. Both directions start as NEW.
   - **Deleted** (in DB, not in seed): delete the card and its progress records.
   - **Updated** (seed `version` > stored `version`): overwrite content fields (`thai`, `english`, `example`, `englishExample`, `category`, `version`). **Never alter FSRS progress, hidden or queued flags of updated cards.**
5. Store the new `seedVersion` only after the sync transaction succeeds. Do the sync in one IndexedDB transaction.
6. On first run with an empty DB, show a brief loading state until the sync completes.

## 4. Data model (IndexedDB, raw API with a small promise wrapper in `services/db.ts`)

Object stores:

- `cards` (key `id`): `id, version, thai, english, thaiExample, englishExample, category, hidden: boolean, queued: boolean`
- `progress` (key `[cardId, direction]`, index on `due`, index on `state`): one record per card per direction, where `direction` is `'forward'` (Thai→English) or `'backward'` (English→Thai). Fields: `cardId, direction, state, due, stability, difficulty, reps, lapses, lastReview, practiceExposures, testable, lastTouchedDay`.
  - `state`: `New | Learning | Review | Relearning`.
  - `testable`: boolean (see §6).
  - `lastTouchedDay`: local date string `YYYY-MM-DD` of the last practice or test of this direction (used for the direction gap).
  - A missing record means the state is `New`; create records lazily.
- `meta`: `seedVersion`, `schemaVersion`.
- `settings`: speech rate, selected voice overrides, etc. (§9).

Use IndexedDB versioned migrations (`onupgradeneeded`) from the start.

## 5. FSRS (in-house, `services/fsrs.ts`)

- Implement the FSRS algorithm directly as pure, side-effect-free functions with the **published default parameters** and **requested retention 0.9**, with fuzzing disabled so results are deterministic. Implement the current published version of the algorithm (verify the formulas and default weights against the official open-spaced-repetition documentation) and record the version used in `extras/decisions.md`. Keep the parameter array in one exported constant so it can be changed later.
- The four ratings are used: **Again** (failed), **Good** (memorized), **Easy** (memorized and easily recalled) and **Hard** (memorized but recalled with effort).
- API (suggested): `nextState(progress | null, rating, now): Progress`; `retrievability(progress, now): number`.
- The scheduler must be independent of the UI and unit-testable. (Adding a test framework needs a justification; otherwise provide a small runnable check script under `/extras` or a dev-only self-test.)

## 6. Card lifecycle and statuses

Statuses are per **direction**, using the filter names NEW, LEARNING, REVIEW, RELEARN, plus HIDDEN (a per-card flag).

| Event | Result |
|---|---|
| NEW card seen in practice (back revealed once) | direction becomes LEARNING; `practiceExposures` incremented |
| LEARNING / RELEARN card practiced to completion of a deck | `testable = true` once the card has been through at least one full practice cycle (see §7) |
| Test: Good on LEARNING or RELEARN card | FSRS update → REVIEW; `due` set by FSRS; `testable = false` |
| Test: Good on REVIEW card | FSRS update; REVIEW; new `due` |
| Test: Again on any card | FSRS update (lapse); state → **RELEARN** (Relearning), `due = now`, `testable = false`. It must be practiced again before it can be retested. |
| Hidden | Card is excluded from all practice and test decks in both directions. Reversible from the detail popup. |
| Queued (manual) | The user marks a NEW card as "practice next"; it is placed in the next practice deck ahead of ordinary NEW cards. Flag clears once practiced. |

**Direction gap:** after a direction of a card is practiced or tested, the opposite direction of the same card is ineligible for practice/test until the next local calendar day (compare against `lastTouchedDay`). Backward-direction NEW cards are only introduced for words whose forward direction is at least REVIEW (assumption; adjustable via a constant in `services/scheduler.ts`).

Display note: a word has two statuses (one per direction). HIDDEN is shown as its own status that overrides both.

## 7. Decks

### Practice deck (15–20 cards, ideally 15)
Filled by priority until reaching 15 or running out of eligible cards:
1. RELEARN directions (highest priority; oldest `due` first)
2. LEARNING directions (oldest `lastReview`/`due` first)
3. Queued NEW cards
4. NEW cards, **highest `id` first**, capped at about 10 new cards per deck.

A practice deck may mix directions; each card keeps its own direction. If fewer than 15 eligible cards exist, still build the deck from whatever is available (and show a friendly message if none).

Practice cycling: advancing past the last card wraps to the first card, and the deck's **cycle counter** increments each wrap. After **three full cycles**, show a button **"Test this deck"** that starts a test on that deck's cards (split by direction, see "Test deck" below). The user may ignore it and keep practicing indefinitely. A card is flagged `testable` once its deck has been cycled once. Practice never calls FSRS ratings.

### Test deck (5–20 cards, single direction)
- Contains cards whose direction is `testable` and (for REVIEW cards) `due <= now`, in one direction only. Order by lowest retrievability / oldest due first.
- When launched from a practice deck, the test contains only that deck's cards of one direction (offer the other direction as a follow-up test).
- When more due cards exist than fit, after finishing a deck offer **"Start another test deck"** immediately.
- Hidden cards are never included.

## 8. Gestures, interaction and navigation

In addition to using visible on-screen buttons, an experienced user should be able to move between cards, re-trigger audio, grade cards using gestures and without looking at the screen. Use multi/single pointer events to distinguish navigation / grading events.

| Pointer type | Pointer gesture | Keyboard | Action |
|---|---|
| Single | Swipe left | Right arrow | flip to back of current card / advance to front of next card |
| Single | Swipe right | Left arrow | return to front of previous card |
| Single | Double tap | Space bar | play audio again |
| Double | Swipe up | Shift + Up arrow | grade Easy |
| Double | Swipe down | Shift + Down arrow | grade Hard |
| Double | Swipe right | Shift + Right arrow | grade Good |
| Double | Double tap | Shift + Space bar | grade Again |

- After grading, advance to the next card.
- When selecting what kind of deck to load, there should be separate navigation buttons for "forward" and "backward" decks.
- Grades commit to IndexedDB immediately (so closing the app mid-test loses nothing).
- Swipe detection: pointer events, minimum distance about 50px, dominant axis wins; ignore vertical scrolling conflicts via `touch-action: none` on the card. Discard ambiguous gestures (including triple pointers and triple taps.)
- Provide visible buttons for all valid actions.
- After the last test card, show a short summary (memorized / failed) with options: **Another test deck**, **Practice**, **Home**.

### Audio and card faces
- Forward card (Thai→English): **front** speaks the Thai word automatically, no text shown; **back** shows Thai and English text, and speaks the English.
- Backward card (English→Thai): **front** speaks the English word, no text shown; **back** shows English and Thai text, and speaks the Thai.
- Every face has a **replay** button (in addition to gesture and keyboard shortcuts). Replay on a front repeats the front word; replay on a back says the back word, then the front word.
- Every face has a small **info** button that opens the word's detail dialog (§11), to give the word context and tell it apart from other meanings.
- Chrome on Android requires a user gesture before speech: the first screen of a session must have a "Start" button.

## 9. Speech (`services/speech.ts`)
- Always cancel any in-progress speech before navigating or starting new speech.
- Use only the **SpeechSynthesis API** with locally available voices.
- Run `speechSynthesis.getVoices()` asynchronously during app initialization and wait for `voiceschanged` and handle both cases.
- Preferred voices are configured in arrays near the top of the module, first match wins. These values are:
  `ENGLISH_VOICES = ['English Australia', 'Moira']` and `THAI_VOICES = ['Kanya', 'Thai Thailand']` (match by `voiceURI`. If no matching voice is found, fall back to the first voice whose `lang` starts with `en` and `th` and display a user warning. At least one Thai voice is guaranteed to exist.
- Settings screen exposes speech rate (default 0.7 for Thai), shows which voice was selected for each language and has a button to play a sample in that voice at that rate.
- Always cancel any in-progress speech before navigating or starting new speech.

## 10. PWA and offline

- Installable, offline-first via `vite-plugin-pwa`: precache the app shell and `seed.tsv`.
- If online, check for updates once per app initialization. Ignore updates and use locally stored data if remote data is unavailable at launch (do not check again later.)
- Manifest: name, short name, light theme/background colours, icons. Icon PNGs and favicon.ico are already located in `/public`. Modify this as required.

## 11. Screens and components

Hash-based routing implemented in `services/router.ts` (no library). Screens:

1. **Home**: counts per direction (new / learning / relearn / due for test), buttons **Practice** and **Test** (choose direction), links to Words and Settings.
2. **Flashcards**: the card UI and flows above.
3. **Words**: a `<table>` of all words (id, Thai, English, forward status, backward status, hidden). Filter chips: ALL, NEW, LEARNING, REVIEW, RELEARN, HIDDEN (a word matches if either direction matches). Clicking a row opens a `<dialog>` with full detail: both directions' state, due date, stability, difficulty, reps, lapses, last review, and actions: **Hide/Unhide**, **Queue for next practice** (only for NEW), and **Reset to NEW**. Card content (`thai`, `english`) is not editable. Support lazy rendering or simple windowing if scrolling 1000 rows is slow on a phone.
4. **Settings / Data**: speech rate and voice info, **Export progress**, **Import progress**, app version.

**Transitions:** fade and translate-x, about 200ms between cards and about 300ms between screens.

## 12. Export / import

- Export downloads a versioned JSON file (`{ format: 1, exportedAt, seedVersion, progress: [...], flags: [{ id, hidden, queued }] }`) containing progress records and the hidden/queued flags only (not card content).
- Import **replaces** all progress after a confirmation dialog. Validate the file first (format version, field types). Ignore ids not present in the DB; leave cards missing from the file as NEW. Apply the import in a single transaction.

## 13. Suggested build order

1. Study existing project files and infer prefered coding style. Raise concerns before continuing.
2. Project scaffolding: router, fade+translate transition, base styles, component convention.
3. `db`, seed parsing and sync.
4. `fsrs` and `scheduler` (deck building) with a self-check.
5. `speech` service.
6. Practice and Test screens with gestures, keyboard, buttons.
7. Words table and detail dialog.
8. Home counts, Settings, export/import.
9. PWA/offline polish, update banner, manual test pass on Android Chrome and macOS Chrome.

## 14. Definition of done

- `yarn build` succeeds with zero TypeScript and Biome errors.
- First run seeds all cards; changing the seed version adds/removes/updates cards without altering progress.
- A full flow works: practice a deck (3 cycles) → test → pass moves to REVIEW, fail moves to RELEARN and returns in the next practice deck ahead of LEARNING cards.
- Works offline once installed; export then import restores progress exactly.
