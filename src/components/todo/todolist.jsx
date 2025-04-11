import { useContext } from 'react';
import { Todo } from './todo';
import { AppContext } from '../../context';

export const Todolist = () => {
	const { todos } = useContext(AppContext);

	return (
		<div>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
					isEditing={todo.isEditing}
				/>
			))}
		</div>
	);
};
