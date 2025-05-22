// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';

import styles from './app.module.css';
import { ControlPanel, User } from './components';

export const App = () => {
	return (
		<div className={styles.App}>
			<User></User>
			<ControlPanel></ControlPanel>
		</div>
	);
};
