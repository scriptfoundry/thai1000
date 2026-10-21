import { BaseComponent, SCREEN_TRANSITION_MS } from '../../services/component';
import HOME_CONTENTS from './home.html?raw';
import './home.scss';

export default class Home extends BaseComponent {
	constructor() {
		super(HOME_CONTENTS, {
			className: 'screen home-screen',
			transitionMs: SCREEN_TRANSITION_MS,
		});
	}
}
