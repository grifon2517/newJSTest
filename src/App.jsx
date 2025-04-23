// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import { Header, UserBlock } from './components';
import { useEffect } from 'react';
import styles from './app.module.css';

import { store } from './store';

const getUserFromServer = () => ({
	id: '1',
	name: 'Grifon',
	age: '30',
	email: 'pochta@mail.com',
	phone: '89000223495',
});

const getAnotherUserFromServer = () => ({
	id: '2',
	name: 'Jogdan',
	age: '34',
	email: 'fefewfta@mail.com',
	phone: '8904241223495',
});

export const App = () => {
	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotheruserDataFromServer = getAnotherUserFromServer();

		store.dispatch({ type: 'SET_USER_DATA', payload: anotheruserDataFromServer });
	};

	return (
		<div className={styles.app}>
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};
