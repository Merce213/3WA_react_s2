import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	selectDragonError,
	selectDragonName,
	selectDragons,
} from "./store/selectors/dragonSelector";
import {
	addDragon,
	deleteDragon,
	setDragonError,
	setDragonName,
} from "./store/actions/dragonAction";

const App = () => {
	const dispatch = useDispatch();

	const dragons = useSelector(selectDragons);
	const name = useSelector(selectDragonName);
	const error = useSelector(selectDragonError);

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(setDragonName({ name, value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			name.trim() === "" ||
			dragons.find(
				(dragon) => dragon.name.toLowerCase() === name.toLowerCase()
			) !== undefined
		) {
			dispatch(
				setDragonError(
					"Please enter a unique dragon name that is not an empty string"
				)
			);
			return;
		}

		dispatch(addDragon());
	};

	const handleDelete = (id) => {
		dispatch(deleteDragon(id));
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
