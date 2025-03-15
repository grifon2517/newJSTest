import { NEW_TODO_ID } from '../constants/new-todo-id';

export const addTodoInTodos = (toDo, todo) => {
	const newTodo = todo || { id: NEW_TODO_ID, title: '', completed: false, isEditing: true };
	return [newTodo, ...toDo];
};
