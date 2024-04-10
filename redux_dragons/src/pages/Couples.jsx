import { useSelector, useDispatch } from "react-redux";
import {
	selectCoupleDragon,
	selectCoupleError,
	selectCoupleKnight,
	selectCouples,
} from "../store/selectors/coupleSelector";
import { selectKnights } from "../store/selectors/knightSelector";
import { selectDragons } from "../store/selectors/dragonSelector";
import {
	addCouple,
	setCoupleError,
	setCoupleValue,
} from "../store/actions/coupleAction";
import { selectLogs } from "../store/selectors/middlewareSelector";

const Couples = () => {
	const dispatch = useDispatch();

	const dragons = useSelector(selectDragons);
	const knights = useSelector(selectKnights);

	const couples = useSelector(selectCouples);
	const dragonCouple = useSelector(selectCoupleDragon);
	const knightCouple = useSelector(selectCoupleKnight);
	const error = useSelector(selectCoupleError);

	const logs = useSelector(selectLogs);
	const logsCouples = logs.filter((log) => log.actionName.includes("COUPLE"));

	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch(setCoupleValue({ name, value }));
	};

	const handleAddCouple = (e) => {
		e.preventDefault();

		if (!dragonCouple === "" || !knightCouple) {
			dispatch(setCoupleError("Please select a dragon and a knight"));
			return;
		}

		dispatch(
			addCouple({
				dragon: JSON.parse(dragonCouple),
				knight: JSON.parse(knightCouple),
			})
		);
	};

	const convertToJsonString = (obj) => JSON.stringify(obj, null, 4);

	return (
		<div>
			<h1>Couples</h1>
			<h2>Add a couple</h2>
			<form onSubmit={handleAddCouple}>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<select
					name="dragon"
					value={dragonCouple}
					onChange={handleChange}
				>
					<option value={""}>Select a dragon</option>
					{dragons.map((dragon) => (
						<option
							key={dragon.id}
							value={convertToJsonString(dragon)}
							disabled={couples.some(
								(couple) => couple.dragon.id === dragon.id
							)}
						>
							{dragon.name}
						</option>
					))}
				</select>
				<select
					name="knight"
					value={knightCouple}
					onChange={handleChange}
				>
					<option>Select a knight</option>
					{knights.map((knight) => (
						<option
							key={knight.id}
							value={convertToJsonString(knight)}
							disabled={couples.some(
								(couple) => couple.knight.id === knight.id
							)}
						>
							{knight.name}
						</option>
					))}
				</select>
				<button type="submit">Add couple</button>
			</form>
			{couples.length === 0 ? (
				<p>There are no couples yet</p>
			) : (
				<ul>
					{couples.map((couple) => (
						<li key={couple.id}>
							{couple.dragon.name} and {couple.knight.name} are a
							couple
						</li>
					))}
				</ul>
			)}
			{logsCouples.length > 0 && (
				<div>
					<p>Logs</p>
					<div>
						{logsCouples.map((log) => (
							<p key={log.id}>
								{log.actionName} at {log.time} on {log.date}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Couples;
