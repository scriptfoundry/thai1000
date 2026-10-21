export interface Component {
	mount: (parent: HTMLElement) => Promise<void>;
	unmount: () => Promise<void>;
}

/** forward = Thai→English, backward = English→Thai. */
export type Direction = 'forward' | 'backward';

/** Stored per direction; a missing progress record means `New`. */
export type CardState = 'New' | 'Learning' | 'Review' | 'Relearning';

/** Word content as delivered by the seed file. */
export interface CardContent {
	id: number;
	version: number;
	thai: string;
	english: string;
	thaiExample: string;
	englishExample: string;
	category: string;
}

export interface Card extends CardContent {
	hidden: boolean;
	queued: boolean;
}

export interface Progress {
	cardId: number;
	direction: Direction;
	state: CardState;
	/** Epoch ms. */
	due: number;
	/** Days; 0 until the first test. */
	stability: number;
	/** 1–10; 0 until the first test. */
	difficulty: number;
	reps: number;
	lapses: number;
	/** Epoch ms of the last test, or null if never tested. */
	lastReview: number | null;
	practiceExposures: number;
	testable: boolean;
	/** Local `YYYY-MM-DD` of the last practice or test of this direction. */
	lastTouchedDay: string | null;
}

/** Spoken languages; each has its own voice and rate. */
export type Language = 'thai' | 'english';

export interface Settings {
	/** SpeechSynthesis rate, 0.5–1.5. */
	thaiRate: number;
	englishRate: number;
}

/** Shared by screens once the app has booted. */
export interface AppContext {
	db: IDBDatabase;
	settings: Settings;
}

declare global {
	/** `version` from package.json, injected by Vite. */
	const __APP_VERSION__: string;
}
