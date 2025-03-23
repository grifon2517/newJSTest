import { Button } from '../button/button';
import PropTypes from 'prop-types';
import styles from './todo.module.css';

export const Task = ({
	title,
	completed,
	onSave,
	onEdit,
	onRemove,
	isEditing,
	onTitleChange,
	onCompletedChange,
}) => {
	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>

			<div className={styles.todoTitle}>
				{isEditing ? (
					<input
						value={title}
						type="text"
						onChange={({ target }) => onTitleChange(target.value)}
					/>
				) : (
					<div onClick={onEdit}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={onSave}>💾</Button>
				) : (
					<Button onClick={onRemove}>🗑️</Button>
				)}
			</div>
		</div>
	);
};

Task.propTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onSave: PropTypes.func,
	onEdit: PropTypes.func,
	onRemove: PropTypes.func,
	isEditing: PropTypes.bool,
	onTitleChange: PropTypes.func,
	onCompletedChange: PropTypes.func,
};
