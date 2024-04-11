import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos);
	return (
		<div>
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
