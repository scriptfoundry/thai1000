export const wait = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));

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
