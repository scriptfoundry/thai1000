# Thai Flashcards — Implementation Plan

## Context

`docs/SPEC.md` describes an audio-first, gesture-driven PWA with in-house FSRS for ~1000 Thai words. The repo is a bare Vite scaffold: one example component (`src/components/title/`), `src/services/utils.ts` (`wait`, `waitAnimationFrames`), base Sass, PWA config, and `public/data/seed.tsv` (999 rows). Reviewing the spec against the repo surfaced format mismatches, internal contradictions, and gaps. They are resolved below (user answers marked **[U]**, my decisions marked **[D]**), followed by a commit-sized build order.

## Decisions (resolutions of spec gaps / conflicts)

**Repo / tooling**
1. **[U]** Seed file is rewritten to spec: line 1 `#seedVersion\t1`, line 2 header `id	version	thai	english	thaiExample	englishExample	category`. The parser stays strict to §3. (Today it starts with `version: 1` and has no header.) Path stays `public/data/seed.tsv` (§3), not `public/seed.tsv` (§2 layout typo).
2. **[U]** `lint` script → `biome check`. Remove `eslint`, `@typescript-eslint/parser`, `globals`, and `eslint.config.mjs`.
3. **[U]** Tests: Node 22.22's built-in `node --test` with native type stripping. Add `"test": "node --test src/**/*.test.ts"`. No new dependencies. Pure services (`fsrs`, `scheduler`, `seed` parser, export validator) must not import DOM or Vite-only modules (`?raw`) so Node can load them. Test files are excluded from the build.
4. **[D]** Decisions go in `docs/decisions.md`. §5 says `extras/decisions.md`, but §1 and §2 say `docs/`, so `docs/` wins.
5. **[D]** `tsconfig.json`: add `"strict": true` (the spec demands strict TS but it isn't set).
6. **[D]** Small fixes to existing files: `index.html` references a missing `/favicon.svg` → use `favicon.ico`, add `theme-color` meta. `title.scss` uses an undefined `var(--red)` → remove it.
7. **[D]** Component convention: `constructor(deps)` + `async mount(parent: HTMLElement): Promise<void>` + `async unmount(): Promise<void>`. This matches §2 and keeps the example's async transition pattern. `types/index.d.ts` `Component` is updated to return `Promise<void>`, and `Title` is adapted.
8. `yarn` isn't on PATH in the sandbox (lockfile is yarn v1). Step 0 tries `corepack enable`, falling back to `npx yarn@1`. If neither works, I stop and ask.

**Seed sync / offline**
9. **[D]** §3 lists the update fields as `example`; that's a typo for `thaiExample`.
10. **[D]** Don't precache `seed.tsv`. Use a Workbox **NetworkFirst** runtime route (≈3s timeout) instead. Precaching would make the SW serve a stale seed forever, until a new app build. NetworkFirst gives a fresh seed when online and a cached seed offline, which matches the intent of §3/§10. If the fetch fails with no cache: empty DB → fatal screen; non-empty DB → warning toast, continue. If `navigator.onLine === false` at start → "offline" warning.
11. **[U]** `registerType: 'prompt'`. Check for an update once at init. If a new SW is waiting, show an update banner with **Reload**. Nothing ever reloads automatically.

**Status model vs FSRS** (the core ambiguity)
12. **[D]** The app's state machine (§6) owns `state`. FSRS only computes `stability`, `difficulty`, and `due`. Implement **FSRS-6** (21 weights, verify against open-spaced-repetition docs at implementation time) in "long-term only" mode, with no learning steps, because practice replaces short-term steps. Same-day re-tests (e.g. RELEARN retested the day it lapsed) use FSRS-6's short-term stability formula (w17–w19). Retention 0.9, no fuzz, interval ≥ 1 day after a pass, ≤ 36500 days. Weights live in one exported `FSRS_PARAMS` constant.
13. **[U]** In a test, **Hard, Good, and Easy all count as a pass** (LEARNING/RELEARN → REVIEW). FSRS still gets the actual rating. Again → RELEARN, `due = now`, lapse++, `testable = false`.
14. **[U]** Test eligibility = (LEARNING or RELEARN with `testable`) **or** (REVIEW with `due ≤ now`). Always excludes hidden cards and direction-gap blocked cards.
15. **[D]** Practice reveal (back shown): a NEW card becomes LEARNING. Every reveal does `practiceExposures++` and sets `lastTouchedDay = today`. Queued clears on the first reveal. RELEARN stays RELEARN during practice. On the deck's **first wrap**, every card in the deck gets `testable = true`. REVIEW cards never enter practice decks.
16. **[D]** A deck never contains both directions of the same card. Direction gap: a direction is blocked if the opposite direction's `lastTouchedDay === today` (local date). Backward NEW unlocks when forward state is REVIEW (`BACKWARD_UNLOCK_STATE` constant).
17. **[D]** Deck sizes: practice target 15 (`PRACTICE_SIZE`), NEW cap 10 (`NEW_CAP`). Test max 20. If fewer than 5 are eligible, run the test with what exists; if none, show a friendly message. Tests are ordered by retrievability ascending; unreviewed LEARNING cards count as R=0, ties broken by oldest `due`/`lastReview`. "Start another test deck" appears if more eligible cards remain.
18. **[D]** "Test this deck" (after 3 cycles) tests the forward cards first, then offers the backward cards as a follow-up (or whichever direction exists).
19. **[U]** The practice deck is not persisted. Reload → rebuild. Per-card progress is already saved.

**Interaction**
20. **[D]** Practice: single-pointer right on the front flips; on the back it advances (wrapping at the end, cycle++). Left goes to the front of the previous card (no-op at index 0). Grade gestures are ignored. Test: right on the front flips. Grades are accepted **only on the back face** (so the answer is heard first), then the app auto-advances. Left and single-right on the back do nothing.
21. **[D]** Gesture recognizer (`services/gestures.ts`) uses Pointer Events on the card (`touch-action: none`). Pointer count = max simultaneous pointers during the gesture (1 or 2; 3+ → discard). Swipe ≥ 50px with a dominant axis (≥1.5× the other); for two pointers, use the centroid. Tap = <10px movement, <250ms. Double tap = two taps within 300ms. Triple tap → discard. It emits semantic actions (`next`, `prev`, `replay`, `grade:*`). The keyboard map in the same module emits the same actions.
22. **[U]** Speech: separate rates, Thai 0.7 and English 1.0. Voices are matched against `voiceURI` **or** `name` (case-insensitive substring), because 'Moira'/'Kanya' are names on macOS and voiceURIs differ per platform. Fallback: first voice whose `lang` starts with `en`/`th`, plus a warning. `getVoices()` is awaited via `voiceschanged` with a timeout. Every speak/navigation calls `cancel()` first.
23. **[D]** Routes: `#/` (Start), `#/home`, `#/practice/:dir`, `#/test/:dir`, `#/words`, `#/settings`. Every session starts at Start (the Android user-gesture requirement). Deep links are remembered and resumed after Start.
24. **[D]** Reset to NEW deletes both progress records and clears queued. Hidden is left unchanged.

## Architecture

```
src/
  main.ts                 boot: open db → start screen → seed sync → router
  types/index.d.ts        Component, Card, Progress, Direction, State, Rating, Settings
  services/
    utils.ts              (existing) wait, waitAnimationFrames; + todayLocal()
    db.ts                 open/migrate (v1: cards, progress[+due,+state idx], meta, settings); promise tx helpers
    seed.ts               parseSeed(text) (pure) + syncSeed(db) (single tx diff)
    fsrs.ts               pure FSRS-6: FSRS_PARAMS, nextState, retrievability
    scheduler.ts          pure deck builders + status derivation; constants
    progress.ts           DB-backed actions: reveal, markDeckTestable, grade, hide, queue, reset
    speech.ts             voices, rates, speak(text, lang), cancel
    gestures.ts           pointer + keyboard → actions
    router.ts             hash router with 300ms screen transitions
    settings.ts           load/save settings store
    export.ts             export JSON, validate + import (single tx)
    pwa.ts                virtual:pwa-register prompt banner
  components/  start, home, flashcards (practice+test modes), card, summary,
               words, word-dialog, settings, banner, title (existing)
  styles/      main.scss (vars), _reset, _typography, _transitions
```

## Build order (each bullet ≈ one small commit on `dev`; `yarn biome check` + `yarn tsc --noEmit` before each)

0. Save `docs/PLAN.md` and `docs/decisions.md`. Get yarn working. Remove ESLint, change the lint/test scripts, add `strict`, fix index.html/title.scss, fix the seed file format.
1. Styles split (vars/reset/typography/transitions), component interface, router + Start/Home stubs with screen transitions.
2. `db.ts` with migrations. `seed.ts` parser + tests. Sync (add/delete/update, single tx, seedVersion fast path). Loading/fatal/warning UI. NetworkFirst seed route.
3. `fsrs.ts` + tests (known-value checks vs the reference implementation for a fixed rating sequence). `scheduler.ts` + tests (priority order, NEW cap, direction gap, backward unlock, no dual-direction decks, test eligibility).
4. `speech.ts`. Settings screen (rates, selected voices, sample buttons).
5. `gestures.ts`. Card component (faces, auto-speak, replay, 200ms transitions). Practice flow (cycles, testable on first wrap, "Test this deck").
6. Test flow (grade buttons + gestures, immediate commits, summary with Another/Practice/Home, follow-up direction).
7. Words table (filters, status columns, simple windowing if slow). Detail `<dialog>` (hide, queue, reset).
8. Home counts per direction. Export/import with a validation + confirm `<dialog>`.
9. PWA polish: manifest colours, update banner, offline check. Manual pass on Android + macOS Chrome.

Spec rule: if a bug or format issue survives two fix attempts, stop and report.

## Verification

- `yarn test`: FSRS known values, scheduler rules, seed parser (malformed rows skipped), export validator.
- `yarn build`: zero tsc/Biome errors.
- Manual (`yarn dev`, Chrome macOS with keyboard): first run seeds 999 cards. Bump `#seedVersion` and add/remove/edit rows → DB reflects the changes and progress is intact. Practice 3 cycles → test → Good → REVIEW; Again → RELEARN, and it's first in the next practice deck. Export → reset → import → identical progress. `yarn build && yarn preview`, go offline → app loads with an offline warning.
- Android Chrome: install, gestures (1- and 2-finger), voices, offline. Needs a published port (`sbx ports … --publish`) or a deployed build, so the user has to run this step.
