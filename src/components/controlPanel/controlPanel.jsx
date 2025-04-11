import styles from './controlPanel.module.css';

import { Search, Sorting } from './components/main';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const ControlPanel = () => {
	const { onTodoAdd, setSearchPhrase, setIsAlphabetSorting } = useContext(AppContext);

	return (
		<div className={styles.controlPanel}>
			<Search onSearch={(value) => setSearchPhrase(value)} />
			<Sorting onSorting={setIsAlphabetSorting} />

			<button className={styles.addButton} onClick={onTodoAdd}>
				➕
			</button>
		</div>
	);
};
