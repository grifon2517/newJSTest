// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import { Header, UserBlock } from './components';
import { useEffect, useReducer } from 'react';
import styles from './app.module.css';
import { AppContext } from './context';

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

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET USER DATA': {
			return payload;
		}
		case 'SET USER AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

export const App = () => {
	const [userData, dispatch] = useReducer(reducer, {});

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		dispatch({ type: 'SET-USER-DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotheruserDataFromServer = getAnotherUserFromServer();

		dispatch({ type: 'SET-USER-DATA', payload: anotheruserDataFromServer });
	};

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContext.Provider>
	);
};
