import { useSelector, useDispatch } from "react-redux";
import { selectCouples } from "../store/selectors/coupleSelector";
import { selectKnights } from "../store/selectors/knightSelector";
import { selectDragons } from "../store/selectors/dragonSelector";

const Couples = () => {
	const dispatch = useDispatch();

	const dragons = useSelector(selectDragons);
	const knights = useSelector(selectKnights);
	const couples = useSelector(selectCouples);

	return (
		<div>
			<h1>Couples</h1>
		</div>
	);
};

export default Couples;
