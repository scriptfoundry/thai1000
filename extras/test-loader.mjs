// Lets `node --test` run TypeScript sources with no extra packages: the
// hooks below compile .ts with the project's own `typescript` and resolve
// extensionless relative imports (`./fsrs`) the way Vite does.
import { register } from 'node:module';

register('./test-loader-hooks.mjs', import.meta.url);
