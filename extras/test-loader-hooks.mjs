import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const RELATIVE = /^\.{1,2}\//;
const HAS_EXTENSION = /\.[cm]?[jt]s$/;

export async function resolve(specifier, context, nextResolve) {
	if (RELATIVE.test(specifier) && !HAS_EXTENSION.test(specifier)) {
		try {
			return await nextResolve(`${specifier}.ts`, context);
		} catch {
			// Not a .ts module; let Node report the original specifier.
		}
	}
	return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
	if (!url.endsWith('.ts')) {
		return nextLoad(url, context);
	}
	const fileName = fileURLToPath(url);
	const source = await readFile(fileName, 'utf8');
	const { outputText } = ts.transpileModule(source, {
		fileName,
		compilerOptions: {
			module: ts.ModuleKind.ESNext,
			target: ts.ScriptTarget.ES2023,
			verbatimModuleSyntax: true,
		},
	});
	return { format: 'module', source: outputText, shortCircuit: true };
}
