/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Task } from './task';

export const TaskPage = ({
	toDo,
	onTodoSave,
	onTodoEdit,
	onTodoRemove,
	onTodoTitleChange,
	onTodoCompletedChange,
}) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const task = toDo.find((task) => task.id === Number(id));

	useEffect(() => {
		if (!task) {
			navigate('/404', { replace: true });
		} else {
			setIsLoading(false);
		}
	}, [task, navigate]);

	if (!task) {
		return null;
	}

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	return (
		<div>
			<button onClick={() => navigate(-1)}>Назад</button>
			<Task
				id={task.id}
				title={task.title}
				completed={task.completed}
				onSave={() => onTodoSave(task.id)}
				onEdit={() => onTodoEdit(task.id)}
				onRemove={() => onTodoRemove(task.id)}
				isEditing={task.isEditing}
				onTitleChange={(newTitle) => onTodoTitleChange(task.id, newTitle)}
				onCompletedChange={(newCompleted) => onTodoCompletedChange(task.id, newCompleted)}
			/>
		</div>
	);
};
