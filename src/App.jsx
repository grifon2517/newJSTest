// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import styles from './app.module.css';
import { Todo } from './components/main';
import { useEffect, useState } from 'react';
import { ControlPanel } from './components/main';
import { createTodo, readTodos, updateTodo, deleteTodo } from './api/api';
import {
	addTodoInTodos,
	removeTodoInTodos,
	setToDoInTodos,
	findTodo,
} from './components/utils/main';
import { NEW_TODO_ID } from './components/constants/new-todo-id';

export const App = () => {
	const [toDo, setToDo] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);

	const onTodoAdd = () => {
		setToDo(addTodoInTodos(toDo));
	};

	const onTodoSave = (todoId) => {
		const { title, completed } = findTodo(toDo, todoId) || {};
		if (todoId === NEW_TODO_ID) {
			createTodo({ title, completed }).then((todo) => {
				let updatedTodo = setToDoInTodos(toDo, { id: NEW_TODO_ID, isEditing: false });

				updatedTodo = removeTodoInTodos(updatedTodo, NEW_TODO_ID);
				updatedTodo = addTodoInTodos(updatedTodo, todo);

				setToDo(updatedTodo);
			});
		} else {
			updateTodo({ id: todoId, title }).then(() => {
				setToDo(setToDoInTodos(toDo, { id: todoId, isEditing: false }));
			});
		}
	};

	const onTodoEdit = (id) => {
		setToDo(setToDoInTodos(toDo, { id, isEditing: true }));
	};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setToDo(removeTodoInTodos(toDo, id)));
	};

	const onTodoTitileChange = (id, newTitile) => {
		setToDo(setToDoInTodos(toDo, { id, title: newTitile }));
	};
	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setToDo(setToDoInTodos(toDo, { id, completed: newCompleted }));
		});
	};

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedToDo) => setToDo(loadedToDo));
	}, [searchPhrase, isAlphabetSorting]);

	return (
		<div className={styles.App}>
			<ControlPanel
				onTodoAdd={onTodoAdd}
				onSearch={setSearchPhrase}
				onSorting={setIsAlphabetSorting}
			/>
			<div>
				{toDo.map(({ id, title, completed, isEditing = false }) => (
					<Todo
						key={id}
						id={id}
						title={title}
						completed={completed}
						onSave={() => onTodoSave(id)}
						onEdit={() => onTodoEdit(id)}
						onRemove={() => onTodoRemove(id)}
						onTitileChange={(newTitile) => onTodoTitileChange(id, newTitile)}
						onCompletedChange={(newCompleted) =>
							onTodoCompletedChange(id, newCompleted)
						}
						isEditing={isEditing}
					/>
				))}
			</div>
		</div>
	);
};
