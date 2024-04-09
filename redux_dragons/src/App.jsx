import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	const dragons = useSelector((state) => state.dragons);
	const name = useSelector((state) => state.name);
	const error = useSelector((state) => state.error);

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "SET_VALUE", payload: { name, value } });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			name.trim() === "" ||
			dragons.find(
				(d) =>
					(d.name.toLowerCase() === name.toLowerCase()) !== undefined
			)
		) {
			dispatch({
				type: "SET_ERROR",
				payload:
					name.trim() === ""
						? "Please enter a dragon name"
						: "Dragon name already exists",
			});
			return;
		}
		dispatch({ type: "ADD_DRAGON" });
	};

	const handleDelete = (id) => {
		dispatch({ type: "DELETE_DRAGON", payload: id });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<input
					type="text"
					name="name"
					placeholder="Enter dragon name"
					value={name}
					onChange={handleChange}
				/>
				<button type="submit">Add</button>
			</form>

			{dragons.length > 0 ? (
				<div>
					<h2>Dragons {`(${dragons.length})`}</h2>
					<div>
						{dragons.map((dragon) => (
							<div key={dragon.id}>
								<p>{dragon.name}</p>
								<button onClick={() => handleDelete(dragon.id)}>
									Delete
								</button>
							</div>
						))}
					</div>
				</div>
			) : (
				<p>No dragons</p>
			)}
		</div>
	);
};

export default App;
