import { AppContext } from './context';
import styles from './app.module.css';

import { ControlPanel } from './components/main';
import { Todolist } from './components/todo/todolist';
import { useTodos } from './hooks/useTodos';

export const App = () => {
	const todosApp = useTodos();
	return (
		<AppContext.Provider value={todosApp}>
			<div className={styles.App}>
				<ControlPanel />

				<Todolist />
			</div>
		</AppContext.Provider>
	);
};
