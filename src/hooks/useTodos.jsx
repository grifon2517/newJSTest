import { useEffect, useState } from 'react';
import { NEW_TODO_ID } from '../components/constants/new-todo-id';
import { createTodo, deleteTodo, readTodos, updateTodo } from '../api/api';

export const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);

	const onTodoAdd = () => {
		const newTodo = {
			id: NEW_TODO_ID,
			title: '',
			completed: false,
			isEditing: true,
		};
		setTodos([newTodo, ...todos]);
	};

	const onTodoSave = async (todoId) => {
		const todo = todos.find((t) => t.id === todoId);
		if (!todo) return;

		try {
			if (todoId === NEW_TODO_ID) {
				const savedTodo = await createTodo({
					title: todo.title,
					completed: todo.completed,
				});

				setTodos((prev) => [
					{ ...savedTodo, isEditing: false },
					...prev.filter((t) => t.id !== NEW_TODO_ID),
				]);
			} else {
				await updateTodo({
					id: todoId,
					title: todo.title,
					completed: todo.completed,
				});

				setTodos((prev) =>
					prev.map((t) => (t.id === todoId ? { ...t, isEditing: false } : t)),
				);
			}
		} catch (error) {
			console.error('Ошибка сохранения:', error);
		}
	};

	const onTodoEdit = (id) => {
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { ...todo, isEditing: true } : todo)),
		);
	};

	const onTodoRemove = async (id) => {
		await deleteTodo(id);
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const onTodoTitleChange = (id, newTitle) => {
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo)),
		);
	};
	const onTodoCompletedChange = async (id, newCompleted) => {
		await updateTodo({ id, completed: newCompleted });
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { ...todo, completed: newCompleted } : todo)),
		);
	};

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then(setTodos);
	}, [searchPhrase, isAlphabetSorting]);

	return {
		todos,
		searchPhrase,
		isAlphabetSorting,
		onTodoAdd,
		onTodoSave,
		onTodoEdit,
		onTodoRemove,
		onTodoTitleChange,
		onTodoCompletedChange,
		setSearchPhrase,
		setIsAlphabetSorting,
	};
};
