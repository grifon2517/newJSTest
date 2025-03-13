import { useState, useRef } from 'react';
import { debounce } from './utils/main';
import styles from './search.module.css';
import PropTypes from 'prop-types';

export const Search = ({ onSearch }) => {
	const [value, setValue] = useState('');

	const debonceOnSearch = useRef(debounce(onSearch, 1500)).current;

	const onChange = ({ target }) => {
		setValue(target.value);

		debonceOnSearch(target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		onSearch(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				placeholder="Поиск..."
				value={value}
				onChange={onChange}
			/>
			{/* <button type="submit">Поиск</button> */}
		</form>
	);
};

Search.propTypes = {
	onSearch: PropTypes.func,
};
