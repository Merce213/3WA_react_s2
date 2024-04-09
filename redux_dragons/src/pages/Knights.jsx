import { useDispatch, useSelector } from "react-redux";
import {
	selectKnightName,
	selectKnightAge,
	selectKnights,
	selectKnightError,
} from "../store/selectors/knightSelector";
import {
	addKnight,
	deleteKnight,
	setKnightError,
	setKnightValue,
} from "../store/actions/knightAction";

const Knights = () => {
	const dispatch = useDispatch();

	const name = useSelector(selectKnightName);
	const age = useSelector(selectKnightAge);
	const knights = useSelector(selectKnights);
	const error = useSelector(selectKnightError);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "age" && value <= 0) {
			dispatch(setKnightError("Please enter a valid knight age"));
			return;
		}
		dispatch(setKnightValue({ name, value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			name.trim() === "" ||
			knights.find(
				(knight) =>
					knight.name.toLowerCase() === name.toLowerCase().trim()
			) !== undefined
		) {
			dispatch(
				setKnightError(
					"Please enter a unique knight name that is not an empty string"
				)
			);
			return;
		}

		if (age < 0 || isNaN(parseFloat(age))) {
			dispatch(setKnightError("Please enter a valid knight age"));
			return;
		}

		dispatch(addKnight());
	};

	const handleDelete = (id) => {
		dispatch(deleteKnight(id));
	};

	return (
		<div>
			<h1>Knight</h1>

			<form onSubmit={handleSubmit}>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<input
					type="text"
					name="name"
					value={name}
					placeholder="Enter knight name"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="age"
					value={age}
					placeholder="Enter knight age"
					onChange={handleChange}
				/>
				<button type="submit">Add Knight</button>
			</form>

			{knights.length > 0 ? (
				<div>
					<p>Number of knights {`(${knights.length})`}</p>
					<div>
						{knights.map((knight) => (
							<div key={knight.id}>
								<p>{knight.name}</p>
								<button onClick={() => handleDelete(knight.id)}>
									Delete
								</button>
							</div>
						))}
					</div>
				</div>
			) : (
				<p>No knights</p>
			)}
		</div>
	);
};

export default Knights;
