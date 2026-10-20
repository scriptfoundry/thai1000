import Title from './components/title/title';
import { wait } from './services/utils';
import './styles/main.scss';

const main = async () => {
	const container = document.getElementById('app') as HTMLDivElement;

	const title = new Title(container);
	await title.mount();
	await wait(2000);
	await title.unmount();
};

main();
