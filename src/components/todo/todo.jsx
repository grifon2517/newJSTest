/* eslint-disable react/prop-types */
import styles from './todo.module.css';
// import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '../../context';

export const Todo = ({ id, title, completed, isEditing }) => {
	const { onTodoSave, onTodoEdit, onTodoRemove, onTodoTitleChange, onTodoCompletedChange } =
		useContext(AppContext);
	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={() => onTodoCompletedChange(id, !completed)}
			/>

			<ul className={styles.todoTitle}>
				<li>
					{isEditing ? (
						<input
							value={title}
							type="text"
							onChange={(e) => onTodoTitleChange(id, e.target.value)}
						/>
					) : (
						<div onClick={() => onTodoEdit(id)}>{title}</div>
					)}
					<></>
				</li>
			</ul>
			<div>
				{isEditing ? (
					<button onClick={() => onTodoSave(id)}>💾</button>
				) : (
					<button onClick={() => onTodoRemove(id)}>🗑️</button>
				)}
			</div>
		</div>
	);
};
