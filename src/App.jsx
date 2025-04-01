import { Route, Routes, Navigate } from 'react-router-dom';

import styles from './app.module.css';
import { NotFoundPage } from './pages/NotFoundPage';
import { ToDoItemPage } from './pages/ToDoItemPage';
import { TodosListPage } from './pages/TodosListPage';
export const App = () => {
	return (
		<div className={styles.App}>
			<Routes>
				{/* Главная страница */}
				<Route path="/" element={<TodosListPage />} />

				{/* Страница задачи */}
				<Route path="/todo/:id" element={<ToDoItemPage />} />

				{/* Страница 404 */}
				<Route path="/404" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="/404" replace />} />
			</Routes>
		</div>
	);
};
