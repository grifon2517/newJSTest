/* eslint-disable react/prop-types */
// import { ToDoItem } from '../ToDoItem/ToDOItem';
import { Link } from 'react-router-dom';
import styles from './Todolist.module.css';

export const Todoslist = ({ todos, onTodoCompletedChange }) => {
	return (
		<ul>
			{todos && todos.length > 0 ? (
				todos.map(({ id, title, completed }) => (
					<li key={id}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={completed}
							onChange={(e) => onTodoCompletedChange(id, e.target.checked)}
						/>
						<Link to={`/todo/${id}`}>
							<div className={styles.todoTitle}>{title}</div>
						</Link>
					</li>
				))
			) : (
				<div>Нет задач</div>
			)}
		</ul>
	);
};

{
	/* <ToDoItem
							id={id}
							title={title}
							completed={completed}
							onTodoCompletedChange={(newCompleted) =>
								onTodoCompletedChange(id, newCompleted)
							}
						/>{' '} */
}
