import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './sorting.module.css';

export const Sorting = ({ onSorting }) => {
	const [isEnabled, setIsEnabled] = useState(false);

	const onChange = ({ target }) => {
		setIsEnabled(target.checked);
		onSorting(target.checked);
	};

	return (
		<button className={styles.sortingButton}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={isEnabled}
				onChange={onChange}
			/>
		</button>
	);
};

Sorting.propTypes = {
	onSorting: PropTypes.func,
};
