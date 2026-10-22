/**
 * Text matcher for the Words search box: a case-insensitive substring, used
 * exactly as typed (never trimmed, so ` to ` skips "today"). Empty matches
 * everything.
 */
export const textMatcher = (query: string): ((text: string) => boolean) => {
	const needle = query.toLowerCase();
	return (text) => text.toLowerCase().includes(needle);
};
