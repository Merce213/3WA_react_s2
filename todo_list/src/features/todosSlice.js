import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodosOfUserOne = createAsyncThunk(
	"todos/fetchTodosOfUserOne",
	async () => {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/users/1/todos"
		);
		const data = await response.json();
		console.log("fetching todos", data);
		return data;
	}
);

export const addNewTodo = createAsyncThunk(
	"todos/addNewTodo",
	async (title) => {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos",
			{
				method: "POST",
				body: JSON.stringify({
					title,
					userId: 1,
					completed: false,
				}),
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		const data = await response.json();
		console.log("new todo data", data);
		return data;
	}
);

export const editTodoCompleted = createAsyncThunk(
	"todos/editTodo",
	async ({ id, completed }) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos/${id}`,
			{
				method: "PATCH",
				body: JSON.stringify({
					id,
					completed,
				}),
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		const data = await response.json();
		console.log("edit data", data);
		return data;
	}
);

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${id}`,
		{
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		}
	);
	const data = await response.json();
	console.log("delete data", data);
	return id;
});

const todosSlice = createSlice({
	name: "todos",
	initialState: {
		todo: {
			title: "",
			userId: 1,
			completed: false,
		},
		todos: [],
		id: 201,
		status: "idle",
		error: null,
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
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodosOfUserOne.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchTodosOfUserOne.fulfilled, (state, action) => {
				state.todos = action.payload;
				state.status = "succeeded";
			})
			.addCase(fetchTodosOfUserOne.rejected, (state, action) => {
				console.log(action.error.message);
				state.error = action.error.message;
				state.status = "failed";
			});

		builder
			.addCase(addNewTodo.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(addNewTodo.fulfilled, (state, action) => {
				state.todos.push({
					...action.payload,
				});
				state.todo.title = "";
				state.id++;
				state.status = "succeeded";
			})
			.addCase(addNewTodo.rejected, (state, action) => {
				console.log(action.error.message);
				state.error = action.error.message;
				state.status = "failed";
			});

		builder
			.addCase(editTodoCompleted.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(editTodoCompleted.fulfilled, (state, action) => {
				const todo = state.todos.find(
					(todo) => todo.id === action.payload.id
				);
				if (todo) {
					todo.completed = action.payload.completed;
				}
				state.status = "succeeded";
			})
			.addCase(editTodoCompleted.rejected, (state, action) => {
				console.log(action.error.message);
				state.error = action.error.message;
				state.status = "failed";
			});

		builder
			.addCase(removeTodo.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(removeTodo.fulfilled, (state, action) => {
				console.log("remove todo", action.payload);
				state.todos = state.todos.filter(
					(todo) => todo.id !== action.payload
				);
				state.status = "succeeded";
			})
			.addCase(removeTodo.rejected, (state, action) => {
				console.log(action.error.message);
				state.error = action.error.message;
				state.status = "failed";
			});
	},
});

export const { addTodo, editTodo, deleteTodo, setTodoTitle } =
	todosSlice.actions;

export default todosSlice.reducer;

export const selectTodos = (state) => state.todos.todos;
export const selectTodoTitle = (state) => state.todos.todo.title;
export const selectTodoId = (state) => state.todos.id;
export const selectTodoStatus = (state) => state.todos.status;
export const selectTodoError = (state) => state.todos.error;
