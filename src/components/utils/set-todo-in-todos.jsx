export const setToDoInTodos = (toDo, newTodoData) =>
	toDo.map((todo) =>
		todo.id === newTodoData.id
			? {
					...todo,
					...newTodoData,
				}
			: todo,
	);
// export const setToDoInTodos = (toDo, newTodoData) => {
// 	if (!Array.isArray(toDo)) {
// 		console.error('Ожидался массив, но получено:', toDo);
// 		return [];
// 	}
// 	return toDo.map((todo) =>
// 		todo.id === newTodoData.id
// 			? {
// 					...todo,
// 					...newTodoData,
// 				}
// 			: todo,
// 	);
// };
