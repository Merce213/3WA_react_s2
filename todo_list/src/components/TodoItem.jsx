import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../features/todosSlice";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const toggleCompleted = () => {
		dispatch(editTodo(todo.id));
	};

	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
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
			<input type="checkbox" onChange={toggleCompleted} />
			<button onClick={handleDelete}>Delete</button>
		</li>
	);
};

export default TodoItem;
