import PropTypes from 'prop-types';
import styles from './todo.module.css';

export const MainPreview = ({ title, completed, onCompletedChange, onClick }) => {
	const handleCheckboxChange = (event) => {
		onCompletedChange(event.target.checked);
	};

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={handleCheckboxChange}
			/>
			<div className={styles.todoTitle} onClick={onClick}>
				{title}
			</div>
		</div>
	);
};
MainPreview.propTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onCompletedChange: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
};
