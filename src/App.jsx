// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import { Header, UserBlock } from './components';
import styles from './app.module.css';
import { AppContext } from './context';

const getUserFromServer = () => ({
	id: '1',
	name: 'Роман',
	age: '25',
	email: 'groove@mail.com',
	phone: '+798882321341',
});

export const App = () => {
	const userData = getUserFromServer();

	return (
		<AppContext.Provider value={userData}>
			<div className={styles.App}>
				<Header />
				<hr />
				<UserBlock />
			</div>
		</AppContext.Provider>
	);
};
