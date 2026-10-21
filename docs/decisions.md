# Decisions

Decisions made where `SPEC.md` is silent, ambiguous, or contradicts the repo. `(user)` = confirmed by the user; otherwise chosen by the agent. See `PLAN.md` for the full plan.

## Tooling and config changes

- **ESLint removed** (user). The spec names Biome as the linter. Removed `eslint`, `@typescript-eslint/parser`, `globals` and `eslint.config.mjs`. `yarn lint` runs `biome check`.
- **Biome ignores gitignored files** (`vcs.useIgnoreFile`), so `dist/` is not linted.
- **`"strict": true`** added to `tsconfig.json`; the spec requires strict TS but it was not set.
- **Tests use `node --test`** (user), with no test framework. Ubuntu's Node build lacks native TypeScript support, so `extras/test-loader.mjs` registers small hooks that compile `.ts` with the installed `typescript` and resolve extensionless relative imports like Vite. `yarn test` runs `src/**/*.test.ts`. Tests are excluded from `tsc` because `@types/node` is not installed; Vite never bundles them since nothing imports them. Modules under test must stay free of DOM and Vite-only imports (`?raw`, `import.meta.env`), which is why seed parsing (`seed.ts`) is separate from fetching and writing (`seed-sync.ts`).
- **`index.html`**: favicon link pointed at a missing `favicon.svg`; now `favicon.ico`. Added `theme-color` meta.
- **`title.scss`**: removed an undefined `var(--red)`.
- `vite-plugin-pwa` lists `workbox-build` and `workbox-window` as peer dependencies. Both are already present transitively, so nothing was added.

## Sandbox environment (not part of the app)

- `node_modules` was installed on macOS. To run Biome, Vite and Sass inside the Linux arm64 sandbox, the matching Linux binaries (`@biomejs/cli-linux-arm64`, `@rolldown/binding-linux-arm64-gnu`, `@rollup/rollup-linux-arm64-gnu`, `sass-embedded-linux-arm64`, `lightningcss-linux-arm64-gnu`) were unpacked into `node_modules` next to the macOS ones, at the versions the lockfile expects (user). `package.json` and `yarn.lock` are unaffected.
- yarn 1.22.22 is provided by corepack in `~/.local/bin`.

## Paths and spec typos

- Decisions live in `docs/decisions.md` (§1/§2); §5's `extras/decisions.md` is treated as a typo.
- Seed path is `public/data/seed.tsv` (§3); §2's `public/seed.tsv` is treated as a typo.
- §3's update field `example` means `thaiExample`.
- **Seed file rewritten to the §3 format** (user): line 1 `#seedVersion<TAB>1`, line 2 a header row. The parser is strict to §3.

## Seed sync and offline

- `seed.tsv` is **not precached**. It uses a Workbox NetworkFirst runtime route (~3s timeout), so a new seed is picked up when online and the cached one is used offline. Precaching would serve a stale seed until the next app build.
- Fetch fails and DB empty → fatal screen. Fetch fails and DB has cards → warning, continue. `navigator.onLine === false` at start → offline warning.
- A seed row that fails validation but has a readable id does not delete the stored card, so a typo in the file cannot wipe progress. A seed with zero valid rows is treated as unavailable.
- Updated cards keep `hidden`/`queued`; the new `seedVersion` is written in the same transaction as the diff, so it is stored only if the sync commits.
- **Service worker uses `registerType: 'prompt'`** (user). It checks once at startup; if an update is waiting, a banner offers Reload. Nothing reloads automatically.

## Status model and FSRS

- The app's state machine (§6) owns `state`. FSRS only computes `stability`, `difficulty` and `due`.
- FSRS-6 (21 weights) in long-term mode with no learning steps; practice replaces short-term steps. Same-day reviews use the FSRS-6 short-term stability formula (w17–w19). Retention 0.9, no fuzz, pass interval 1–36500 days. Weights are in the exported `FSRS_PARAMS`.
- **FSRS verification:** formulas and default weights were checked against ts-fsrs 5.4.2 ("FSRS-6.0", from npm; GitHub was blocked). Over 24,000 random steps, stability matched within 3e-7 (relative; the reference rounds to 8 decimals) and every interval matched. `fsrs.test.ts` pins three reference sequences. ts-fsrs was only downloaded to a scratch folder and is not a dependency.
- Elapsed time is whole **local** calendar days (ts-fsrs uses UTC days), matching `lastTouchedDay`.
- A passed test is **due at local midnight** of the interval day, not the exact time of day, so a card due tomorrow is testable all of tomorrow.
- The reference also pushes Hard < Good < Easy intervals apart when it computes all four at once; only the chosen rating is computed here, so that adjustment is skipped. The intervals already come out in that order for the default weights.
- Backward NEW unlocks when forward is Review **or Relearning** ("at least REVIEW": a lapsed forward has been REVIEW before).
- `NEW_CAP` counts queued NEW too: queued go first, then ordinary NEW up to 10 in total.
- LEARNING directions are ordered by `due`, which is set when the card is first revealed in practice (oldest first).
- **Hard, Good and Easy all count as a pass** in a test (user): LEARNING/RELEARN → REVIEW. FSRS receives the actual rating. Again → RELEARN, `due = now`, lapses + 1, `testable = false`.
- **Test eligibility** (user): LEARNING or RELEARN with `testable`, or REVIEW with `due <= now`. Hidden and direction-gap-blocked cards are excluded.
- Practice reveal (back shown): NEW → LEARNING. Each reveal increments `practiceExposures` and sets `lastTouchedDay`. `queued` clears on the first reveal. RELEARN stays RELEARN during practice. On the deck's first wrap, every card in it becomes `testable`. REVIEW cards never enter practice decks.
- **Practice decks are always one direction** (user; overrides §7 "may mix directions"). Home has separate forward and backward Practice buttons. Direction gap: blocked if the opposite direction's `lastTouchedDay` is today (local). Backward NEW unlocks when forward is REVIEW (`BACKWARD_UNLOCK_STATE`).
- Practice deck target 15 (`PRACTICE_SIZE`), NEW cap 10 (`NEW_CAP`). Test max 20; fewer than 5 eligible still runs; none shows a message. Tests are ordered by retrievability ascending (never-tested = 0), then oldest `due`/`lastReview`.
- "Test this deck" tests that deck's cards in its single direction, so there is no follow-up test in the other direction.
- **Practice decks are not persisted** (user); reload rebuilds one. Per-card progress is saved as it happens.
- Reset to NEW deletes both progress records and clears `queued`; `hidden` is unchanged.

## Interaction

- Practice: right on front flips; right on back advances (wraps, cycle + 1); left goes to the previous card's front (no-op at the first card). Grade gestures are ignored.
- Test: right on front flips. Grades are accepted only on the back face, then auto-advance. Left and single-pointer right on the back do nothing.
- Gestures: pointer count = max simultaneous pointers (3+ discarded); a `pointercancel` discards the gesture. Swipe ≥ 50px of centroid travel with a dominant axis ≥ 1.5× the other. Tap: every pointer moves ≤ 10px and the gesture lasts ≤ 300ms (raised from 250ms so two-finger taps register). Taps within 300ms of each other form a multi-tap.
- **Double taps act about 300ms after the second tap**, once no third tap has arrived; that delay is what lets triple taps be discarded. Single taps do nothing.
- Presses that start on a button or link inside the card area are clicks, not gestures. Gesture keys call `preventDefault`, so Space never also activates a focused button.
- Previous is disabled on the first card of a round, rather than wrapping backwards.
- Card fronts show only "Listen · Thai" (or English) and a speaker icon, never the word. The main button reads "Show answer" on the front and "Next card" on the back.
- "Test this deck" navigates to `#/test/<direction>?cards=<ids>`, so a reload keeps the test's card list. The router passes query values as route params.
- **Separate speech rates** (user): Thai 0.7, English 1.0.
- Voices match `voiceURI` or `name`, case-insensitive substring, because names like "Moira" and "Kanya" are not voiceURIs on every platform.
- Voice warnings (fallback used, or no voice for a language) appear as banners at startup and on the Settings screen. Speech is unlocked by a silent utterance spoken inside the Start tap.
- Rates are adjustable from 0.5 to 1.5 and saved when the slider is released. There is no manual voice override yet: the spec only asks to show the chosen voice, and a picker can be added to the `settings` store later.
- The app version comes from `package.json` via a Vite `define` (`__APP_VERSION__`).
- Component convention: `constructor(deps)`, `async mount(parent)`, `async unmount()`. Shared plumbing (template, fade/slide, `query`) lives in `BaseComponent` (`services/component.ts`); screens add the `screen` class for the 300ms transition.
- Styles: `_controls.scss` (buttons) was added next to the variables/reset/typography/transitions partials.
- Routes: `#/`, `#/home`, `#/practice/:dir`, `#/test/:dir`, `#/words`, `#/settings`. Every session starts at Start (the speech user-gesture requirement); a deep link resumes after Start.
