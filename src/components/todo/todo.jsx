import styles from './todo.module.css';
import PropTypes from 'prop-types';
import { Button } from '../button/button';

export const Todo = ({
	title,
	completed,
	onSave,
	onEdit,
	onRemove,
	isEditing,
	onTitileChange,
	onCompletedChange,
}) => {
	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed === 'true' || completed === true}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>

			<div className={styles.todoTitle}>
				{isEditing ? (
					<input
						value={title}
						type="text"
						onChange={({ target }) => onTitileChange(target.value)}
					/>
				) : (
					<div onClick={onEdit}>{title}</div>
				)}
				<></>
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

Todo.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onSave: PropTypes.func,
	onEdit: PropTypes.func,
	onRemove: PropTypes.func,
	isEditing: PropTypes.bool,
	onTitileChange: PropTypes.func,
	onCompletedChange: PropTypes.func,
};
