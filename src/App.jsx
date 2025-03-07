// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import styles from './app.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [toDo, setToDo] = useState([]);
	return <div className={styles.App}></div>;
};
