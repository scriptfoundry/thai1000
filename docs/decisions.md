# Decisions

Decisions made where `SPEC.md` is silent, ambiguous, or contradicts the repo. `(user)` = confirmed by the user; otherwise chosen by the agent. See `PLAN.md` for the full plan.

## Tooling and config changes

- **ESLint removed** (user). The spec names Biome as the linter. Removed `eslint`, `@typescript-eslint/parser`, `globals` and `eslint.config.mjs`. `yarn lint` runs `biome check`.
- **Biome ignores gitignored files** (`vcs.useIgnoreFile`), so `dist/` is not linted.
- **`"strict": true`** added to `tsconfig.json`; the spec requires strict TS but it was not set.
- **Tests use `node --test`** (user). Node 22 runs `.ts` files natively (type stripping), so no test framework is needed. `yarn test` runs `src/**/*.test.ts`. Tests are excluded from `tsc` because `@types/node` is not installed; Vite never bundles them since nothing imports them. Modules under test must stay free of DOM and Vite-only imports (`?raw`).
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
- **Service worker uses `registerType: 'prompt'`** (user). It checks once at startup; if an update is waiting, a banner offers Reload. Nothing reloads automatically.

## Status model and FSRS

- The app's state machine (§6) owns `state`. FSRS only computes `stability`, `difficulty` and `due`.
- FSRS-6 (21 weights) in long-term mode with no learning steps; practice replaces short-term steps. Same-day reviews use the FSRS-6 short-term stability formula (w17–w19). Retention 0.9, no fuzz, pass interval 1–36500 days. Weights are in the exported `FSRS_PARAMS`.
- **Hard, Good and Easy all count as a pass** in a test (user): LEARNING/RELEARN → REVIEW. FSRS receives the actual rating. Again → RELEARN, `due = now`, lapses + 1, `testable = false`.
- **Test eligibility** (user): LEARNING or RELEARN with `testable`, or REVIEW with `due <= now`. Hidden and direction-gap-blocked cards are excluded.
- Practice reveal (back shown): NEW → LEARNING. Each reveal increments `practiceExposures` and sets `lastTouchedDay`. `queued` clears on the first reveal. RELEARN stays RELEARN during practice. On the deck's first wrap, every card in it becomes `testable`. REVIEW cards never enter practice decks.
- A deck never holds both directions of one card. Direction gap: blocked if the opposite direction's `lastTouchedDay` is today (local). Backward NEW unlocks when forward is REVIEW (`BACKWARD_UNLOCK_STATE`).
- Practice deck target 15 (`PRACTICE_SIZE`), NEW cap 10 (`NEW_CAP`). Test max 20; fewer than 5 eligible still runs; none shows a message. Tests are ordered by retrievability ascending (never-tested = 0), then oldest `due`/`lastReview`.
- "Test this deck" tests forward cards first, then offers backward as a follow-up.
- **Practice decks are not persisted** (user); reload rebuilds one. Per-card progress is saved as it happens.
- Reset to NEW deletes both progress records and clears `queued`; `hidden` is unchanged.

## Interaction

- Practice: right on front flips; right on back advances (wraps, cycle + 1); left goes to the previous card's front (no-op at the first card). Grade gestures are ignored.
- Test: right on front flips. Grades are accepted only on the back face, then auto-advance. Left and single-pointer right on the back do nothing.
- Gestures: pointer count = max simultaneous pointers (3+ discarded). Swipe ≥ 50px with a dominant axis ≥ 1.5× the other; two-pointer swipes use the centroid. Tap < 10px and < 250ms; double tap = two taps within 300ms; triple tap discarded.
- **Separate speech rates** (user): Thai 0.7, English 1.0.
- Voices match `voiceURI` or `name`, case-insensitive substring, because names like "Moira" and "Kanya" are not voiceURIs on every platform.
- Component convention: `constructor(deps)`, `async mount(parent)`, `async unmount()`.
- Routes: `#/`, `#/home`, `#/practice/:dir`, `#/test/:dir`, `#/words`, `#/settings`. Every session starts at Start (the speech user-gesture requirement); a deep link resumes after Start.
