import { BaseComponent } from '../../services/component';
import TITLE_CONTENTS from './title.html?raw';
import './title.scss';

export default class Title extends BaseComponent {
	private readonly text: string;

	constructor(text: string) {
		super(TITLE_CONTENTS, { className: 'title' });
		this.text = text;
	}

	protected override onMount(): void {
		this.query('h1').textContent = this.text;
	}
}
