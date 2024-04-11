import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
	name: "todos",
	initialState: {
		todo: {
			title: "",
			userId: 1,
			completed: false,
		},
		todos: [],
		id: 101,
	},
	reducers: {
		setTodoTitle: (state, action) => {
			state.todo.title = action.payload;
		},
		addTodo: (state) => {
			state.todos.push({
				...state.todo,
				title: state.todo.title.trim(),
				id: state.id,
			});
			state.todo.title = "";
			state.id++;
		},
		editTodo: (state, action) => {
			const todo = state.todos.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
	},
});

export const { addTodo, editTodo, deleteTodo, setTodoTitle } =
	todosSlice.actions;

export default todosSlice.reducer;
