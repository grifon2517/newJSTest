import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteTodo, updateTodo } from '../api/api';
import styles from '../pages/styles/todoitempage.module.css';

export const ToDoItemPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [todo, setTodo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [editedTitle, setEditedTitle] = useState('');

	useEffect(() => {
		getTodoById(id);
	}, [id]);

	const getTodoById = async (id) => {
		setIsLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`);
			if (!response.ok) {
				navigate('/404', { replace: true });
				return;
			}
			const todo = await response.json();
			setTodo(todo);
			setEditedTitle(todo.title);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSave = async () => {
		try {
			await updateTodo({
				id: todo.id,
				title: editedTitle,
				completed: todo.completed,
			});

			setTodo({
				...todo,
				title: editedTitle,
			});
			navigate('/');
		} catch (error) {
			console.error('Ошибка:', error);
			setError('Не удалось сохранить');
		}
	};

	const handleDelete = async () => {
		try {
			await deleteTodo(todo.id);
			navigate('/');
		} catch (error) {
			console.error('Ошибка:', error);
			setError('Не удалось удалить задачу');
		}
	};

	if (isLoading) return <div className={styles.loading}>Загрузка данных</div>;
	if (error) return <div className={styles.error}>{error.message}</div>;
	if (!todo) return <div className={styles.textarea}>Задача не найдена</div>;

	return (
		<div className={styles.container}>
			<button className={styles.backButton} onClick={() => navigate(-1)}>
				Назад
			</button>

			<textarea
				value={editedTitle}
				onChange={(event) => setEditedTitle(event.target.value)}
				className={styles.textarea}
			/>

			<div className={styles.controls}>
				<button
					onClick={handleSave}
					className={styles.button}
					disabled={!editedTitle.trim()}
				>
					💾 Сохранить
				</button>
				<button onClick={handleDelete} className={styles.button}>
					🗑️ Удалить
				</button>
			</div>
		</div>
	);
};
