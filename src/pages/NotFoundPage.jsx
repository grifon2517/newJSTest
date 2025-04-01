import { useNavigate } from 'react-router-dom';

// Страница 404 и кнопка На главную
export const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Страница не найдена</h1>
			<button onClick={() => navigate('/')}>На главную</button>
		</div>
	);
};
