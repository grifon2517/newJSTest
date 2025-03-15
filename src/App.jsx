// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import styles from './app.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [toDo, setToDo] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedToDo) => {
				setToDo(loadedToDo);
			});
	});

	return (
		<div className={styles.App}>
			<div>
				{toDo.map(({ id, title, completed }) => (
					<div
						key={id}
						className={`${styles.toDoItem} ${completed ? styles.completed : ''}`}
					>
						<input type="checkbox" checked={completed} readOnly />
						{title}
					</div>
				))}
			</div>
		</div>
	);
};
