import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TodoItem from "./TodoItem";
import {
	fetchTodosOfUserOne,
	selectTodoStatus,
	selectTodos,
} from "../features/todosSlice";

const TodoList = () => {
	const dispatch = useDispatch();

	const todos = useSelector(selectTodos);
	const status = useSelector(selectTodoStatus);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchTodosOfUserOne());
		}
	}, [dispatch, status]);

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h3>Numbers of Todos : {todos.length}</h3>
			{todos.length > 0 ? (
				<ul>
					{todos.map((todo) => (
						<TodoItem key={todo.id} todo={todo} />
					))}
				</ul>
			) : (
				<p>No todos to show</p>
			)}
		</div>
	);
};

export default TodoList;
