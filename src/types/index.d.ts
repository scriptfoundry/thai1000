export interface Component {
	mount: (parent: HTMLElement) => Promise<void>;
	unmount: () => Promise<void>;
}
