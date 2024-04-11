import { useDispatch } from "react-redux";
import { editTodoCompleted, removeTodo } from "../features/todosSlice";
// import { deleteTodo, editTodo } from "../features/todosSlice";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const toggleCompleted = () => {
		dispatch(
			editTodoCompleted({
				id: todo.id,
				completed: !todo.completed,
			})
		);
	};

	const handleDelete = () => {
		dispatch(removeTodo(todo.id));
	};

	return (
		<li
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<span>{todo.completed ? "✅" : "❌"}</span>
			<p>{todo.title}</p>
			<input
				type="checkbox"
				onChange={toggleCompleted}
				checked={todo.completed}
			/>
			<button onClick={handleDelete}>Delete</button>
		</li>
	);
};

export default TodoItem;
