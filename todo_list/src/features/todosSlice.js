import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
	name: "todos",
	initialState: {
		todos: [
			{
				userId: 1,
				id: 1,
				title: "delectus aut autem",
				completed: false,
			},
		],
	},
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		editTodo: (state, action) => {
			const { id, title } = action.payload;
			const todoToEdit = state.todos.find((todo) => todo.id === id);
			if (todoToEdit) {
				todoToEdit.title = title;
			}
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
	},
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
