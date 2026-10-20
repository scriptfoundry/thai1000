import { wait, waitAnimationFrames } from '../../services/utils';
import type { Component } from '../../types';
import TITLE_CONTENTS from './title.html?raw';
import './title.scss';

export default class Title implements Component {
	private container: HTMLDivElement;
	private element = document.createElement('div');

	constructor(container: HTMLElement) {
		this.container = container as HTMLDivElement;

		this.element = document.createElement('div');
		this.element.classList.add('component');
		this.element.innerHTML = TITLE_CONTENTS;
	}

	public async mount(): Promise<void> {
		this.container.appendChild(this.element);
		await waitAnimationFrames(2);
		this.element.classList.add('visible');
		await wait(300);
	}
	public async unmount(): Promise<void> {
		this.element.classList.remove('visible');
		await wait(300);
		this.container.removeChild(this.element);
		await waitAnimationFrames(1);
	}
}
