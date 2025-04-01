import styles from './controlPanel.module.css';

import PropTypes from 'prop-types';
import { Search, Sorting } from './components';

export const ControlPanel = ({ onTodoAdd, onSearch, onSorting }) => {
	// const [searchPhrase, setSearchPhrase] = useState('');
	// const [isSortingEnabled, setIsSortingEnabled] = useState(false);

	return (
		<div className={styles.controlPanel}>
			<Search onSearch={onSearch} />
			<Sorting onSorting={onSorting} />

			<button onClick={onTodoAdd} className={styles.Button}>
				➕
			</button>
		</div>
	);
};

ControlPanel.propTypes = {
	onTodoAdd: PropTypes.func,
	onSearch: PropTypes.func,
	onSorting: PropTypes.func,
};
