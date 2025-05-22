import { useSelector } from 'react-redux';
import { selecAge, selectName } from '../../selectors';

export const User = () => {
	const name = useSelector(selectName);
	const age = useSelector(selecAge);

	return (
		<div>
			<div>Пользователь</div>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
		</div>
	);
};
