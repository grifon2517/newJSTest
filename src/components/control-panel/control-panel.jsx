import { useDispatch } from 'react-redux';
import { RESET_AGE, increaseAge, changeUserAsync } from '../../actions';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const onAgeIncrease = () => {
		dispatch(increaseAge(3));
	};

	const onAgeReset = () => {
		dispatch(RESET_AGE);
	};

	const onUserChange = () => {
		dispatch(changeUserAsync);
	};

	return (
		<div>
			<button onClick={onAgeIncrease}>Увелиичть возраст</button>
			<button onClick={onAgeReset}>Сбросить возраст</button>
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};
