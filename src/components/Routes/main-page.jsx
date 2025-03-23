/* eslint-disable react/prop-types */
import { ControlPanel } from '../controlPanel/controlPanel';
import { MainPreview } from './main-preview';
import { useNavigate } from 'react-router-dom';

export const MainPage = ({
	toDo,
	onTodoAdd,
	setSearchPhrase,
	setIsAlphabetSorting,
	onTodoCompletedChange,
}) => {
	const navigate = useNavigate();

	return (
		<div>
			<div>
				<ControlPanel
					onTodoAdd={onTodoAdd}
					onSearch={setSearchPhrase}
					onSorting={setIsAlphabetSorting}
				/>
				<div>
					{toDo && toDo.length > 0 ? (
						toDo.map(({ id, title, completed }) => (
							<div key={id}>
								<MainPreview
									id={id}
									title={title}
									completed={completed}
									onCompletedChange={(newCompleted) =>
										onTodoCompletedChange(id, newCompleted)
									}
									onClick={() => navigate(`/task/${id}`)}
								/>
							</div>
						))
					) : (
						<div>Нет задач</div>
					)}
				</div>
			</div>
		</div>
	);
};
