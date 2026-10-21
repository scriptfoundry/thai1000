/**
 * Minimal promise wrapper over the raw IndexedDB API.
 *
 * Stores:
 *   cards     key `id`
 *   progress  key `[cardId, direction]`, indexes `due` and `state`
 *   meta      out-of-line keys (`seedVersion`, `schemaVersion`)
 *   settings  out-of-line keys
 */

const DB_NAME = 'thai-flashcards';

export type StoreName = 'cards' | 'progress' | 'meta' | 'settings';

type Migration = (db: IDBDatabase, tx: IDBTransaction) => void;

/** Append-only: migrations[n] upgrades the schema from version n to n + 1. */
const MIGRATIONS: Migration[] = [
	(db) => {
		db.createObjectStore('cards', { keyPath: 'id' });
		const progress = db.createObjectStore('progress', {
			keyPath: ['cardId', 'direction'],
		});
		progress.createIndex('due', 'due');
		progress.createIndex('state', 'state');
		db.createObjectStore('meta');
		db.createObjectStore('settings');
	},
];

export const SCHEMA_VERSION = MIGRATIONS.length;

export const request = <T>(req: IDBRequest<T>): Promise<T> =>
	new Promise((resolve, reject) => {
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});

/** Resolves when the transaction commits; rejects if it aborts or errors. */
export const done = (tx: IDBTransaction): Promise<void> =>
	new Promise((resolve, reject) => {
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error ?? new Error('Transaction aborted'));
	});

export const openDb = (): Promise<IDBDatabase> =>
	new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, SCHEMA_VERSION);
		req.onupgradeneeded = (event) => {
			const tx = req.transaction;
			if (!tx) {
				return;
			}
			for (let v = event.oldVersion; v < SCHEMA_VERSION; v++) {
				MIGRATIONS[v]?.(req.result, tx);
			}
			tx.objectStore('meta').put(SCHEMA_VERSION, 'schemaVersion');
		};
		req.onsuccess = () => {
			const db = req.result;
			// Another tab upgraded the schema; this connection is stale.
			db.onversionchange = () => db.close();
			resolve(db);
		};
		req.onerror = () => reject(req.error);
		req.onblocked = () =>
			reject(new Error('Database upgrade blocked by another open tab'));
	});

export const getAll = <T>(db: IDBDatabase, store: StoreName): Promise<T[]> =>
	request(
		db.transaction(store).objectStore(store).getAll() as IDBRequest<T[]>,
	);

export const get = <T>(
	db: IDBDatabase,
	store: StoreName,
	key: IDBValidKey,
): Promise<T | undefined> =>
	request(
		db.transaction(store).objectStore(store).get(key) as IDBRequest<
			T | undefined
		>,
	);

export const count = (db: IDBDatabase, store: StoreName): Promise<number> =>
	request(db.transaction(store).objectStore(store).count());

/** Put one value; pass `key` for stores with out-of-line keys. */
export const put = async (
	db: IDBDatabase,
	store: StoreName,
	value: unknown,
	key?: IDBValidKey,
): Promise<void> => {
	const tx = db.transaction(store, 'readwrite');
	tx.objectStore(store).put(value, key);
	await done(tx);
};

/**
 * Run `work` in one readwrite transaction and resolve after it commits.
 * `work` may await requests on `tx` (microtasks keep it alive) but must not
 * await anything else.
 */
export const transact = async <T>(
	db: IDBDatabase,
	stores: StoreName[],
	work: (tx: IDBTransaction) => Promise<T>,
): Promise<T> => {
	const tx = db.transaction(stores, 'readwrite');
	const committed = done(tx);
	try {
		const result = await work(tx);
		await committed;
		return result;
	} catch (error) {
		// The transaction rejects too; only surface the original error.
		committed.catch(() => undefined);
		try {
			tx.abort();
		} catch {
			// Already finished or aborted.
		}
		throw error;
	}
};
