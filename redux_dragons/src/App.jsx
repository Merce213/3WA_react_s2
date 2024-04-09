import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	const dragons = useSelector((state) => state.dragons);
	const dragon = useSelector((state) => state.dragon);
	const error = useSelector((state) => state.error);

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "SET_VALUE", payload: { name, value } });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (dragon.name.trim() !== "") {
			dispatch({ type: "ADD_DRAGON" });
		} else {
			dispatch({ type: "SET_ERROR", payload: "Name cannot be empty" });
		}
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
					value={dragon.name}
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
