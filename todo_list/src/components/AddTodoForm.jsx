import { useSelector, useDispatch } from "react-redux";
// import { addTodo, setTodoTitle } from "../features/todosSlice";
import {
	addNewTodo,
	selectTodoTitle,
	setTodoTitle,
} from "../features/todosSlice";

const AddTodoForm = () => {
	const dispatch = useDispatch();

	const title = useSelector(selectTodoTitle);

	const handleChange = (e) => {
		const { value } = e.target;

		dispatch(setTodoTitle(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title.trim() === "") {
			return;
		}

		dispatch(addNewTodo(title));
	};

	return (
		<div>
			<h3>Add a Todo</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					placeholder="Enter a title"
					value={title}
					onChange={handleChange}
				/>

				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

export default AddTodoForm;
