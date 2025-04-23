import { store } from '../../../../store';

export const UserPersonalInfo = () => {
	const { name, age } = store.getState();
	const onUserUpdate = () => {
		const { name, email, phone } = store.getState();
		const newUserData = { name, age: 20, email, phone };

		// setUserData({ name, age: 20, email, phone });
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};
	const onUserAgeDecrease = () => {
		store.dispatch({ type: 'SET_USER_AGE', payload: 15 });
	};

	return (
		<div>
			<h3>Персональные данные</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserUpdate}>Обновить пользователя</button>
			<button onClick={onUserAgeDecrease}>Уменшить возраст пользователя</button>
		</div>
	);
};
