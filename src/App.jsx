import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MainPage, TaskPage } from './components/Routes';
import { createTodo, readTodos, updateTodo, deleteTodo } from './api/api';
import styles from './app.module.css';

export const App = () => {
	const [toDo, setToDo] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);
	const navigate = useNavigate();

	// Добавление новой задачи
	const onTodoAdd = () => {
		const newTodo = { title: 'Новая задача', completed: false };
		createTodo(newTodo).then((savedTodo) => {
			setToDo([...toDo, savedTodo]);
			navigate(`/task/${savedTodo.id}`);
		});
	};

	// Сохранение задачи
	const onTodoSave = (todoId) => {
		const task = toDo.find((task) => task.id === todoId);
		if (task) {
			updateTodo({ id: todoId, title: task.title, completed: task.completed }).then(() => {
				setToDo(toDo.map((t) => (t.id === todoId ? { ...t, isEditing: false } : t)));
			});
		}
	};

	// Редактирование задачи
	const onTodoEdit = (id) => {
		setToDo(toDo.map((t) => (t.id === id ? { ...t, isEditing: true } : t)));
	};

	// Удаление задачи
	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => {
			setToDo(toDo.filter((t) => t.id !== id));
			navigate('/');
		});
	};

	// Изменение заголовка задачи
	const onTodoTitleChange = (id, newTitle) => {
		setToDo(toDo.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));
	};

	// Изменение состояния задачи (выполнено/не выполнено)
	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setToDo(toDo.map((t) => (t.id === id ? { ...t, completed: newCompleted } : t)));
		});
	};

	// Загрузка задач при изменении поиска или сортировки
	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedToDo) => setToDo(loadedToDo));
	}, [searchPhrase, isAlphabetSorting]);
	// Страница 404 и кнопка На главную
	const NotFoundPage = () => {
		const navigate = useNavigate();

		return (
			<div>
				<h1>Страница не найдена</h1>
				<button onClick={() => navigate('/')}>На главную</button>
			</div>
		);
	};

	return (
		<div className={styles.App}>
			<Routes>
				{/* Главная страница */}
				<Route
					path="/"
					element={
						<MainPage
							toDo={toDo}
							onTodoAdd={onTodoAdd}
							setSearchPhrase={setSearchPhrase}
							setIsAlphabetSorting={setIsAlphabetSorting}
							onTodoCompletedChange={onTodoCompletedChange}
						/>
					}
				/>

				{/* Страница задачи */}
				<Route
					path="/task/:id"
					element={
						<TaskPage
							toDo={toDo}
							onTodoSave={onTodoSave}
							onTodoEdit={onTodoEdit}
							onTodoRemove={onTodoRemove}
							onTodoTitleChange={onTodoTitleChange}
							onTodoCompletedChange={onTodoCompletedChange}
						/>
					}
				/>

				{/* Страница 404 */}
				<Route path="/404" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="/404" replace />} />
			</Routes>
		</div>
	);
};
