import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { createTodo, readTodos, updateTodo } from '../api/api';

import { Todoslist } from '../components/ToDosList/TodosList';
import { ControlPanel } from '../components/controlPanel/controlPanel';

export const TodosListPage = () => {
	const [todos, setTodos] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);
	const navigate = useNavigate();

	// Добавление новой задачи
	const onTodoAdd = () => {
		const newTodo = { title: 'Новая задача', completed: false };
		createTodo(newTodo).then((savedTodo) => {
			setTodos([...todos, savedTodo]);
			navigate(`/todo/${savedTodo.id}`);
		});
	};

	// Изменение состояния задачи (выполнено/не выполнено)
	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(
				todos.map((todos) =>
					todos.id === id ? { ...todos, completed: newCompleted } : todos,
				),
			);
		});
	};

	// Загрузка задач при изменении поиска или сортировки
	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedToDo) => setTodos(loadedToDo));
	}, [searchPhrase, isAlphabetSorting]);

	return (
		<div>
			<ControlPanel
				onTodoAdd={onTodoAdd}
				onSearch={setSearchPhrase}
				onSorting={setIsAlphabetSorting}
			/>
			<Todoslist todos={todos} onTodoCompletedChange={onTodoCompletedChange} />
		</div>
	);
};
