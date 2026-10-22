export const wait = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));

/** Fisher–Yates shuffle into a new array. */
export const shuffle = <T>(items: readonly T[], random = Math.random): T[] => {
	const result = [...items];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(random() * (i + 1));
		[result[i], result[j]] = [result[j] as T, result[i] as T];
	}
	return result;
};

export const waitAnimationFrames = (frames: number): Promise<void> =>
	new Promise((resolve) => {
		const waitForNextFrame = () => {
			if (--frames > 0) {
				window.requestAnimationFrame(waitForNextFrame);
			} else {
				resolve();
			}
		};
		window.requestAnimationFrame(waitForNextFrame);
	});
