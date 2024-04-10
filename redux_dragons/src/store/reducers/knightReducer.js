import {
	KNIGHT_ADD,
	KNIGHT_DELETE,
	KNIGHT_SET_ERROR,
	KNIGHT_SET_VALUE,
} from "../constants/knightConstant";

const initialState = {
	knights: [
		{
			id: 1712747513880,
			name: "Arthur",
			age: 35,
		},
		{
			id: 1712747513882,
			name: "Lancelot",
			age: 30,
		},
	],
	name: "",
	age: 1,
	error: "",
};

const knightReducer = (state = initialState, action) => {
	switch (action.type) {
		case KNIGHT_SET_VALUE:
			return {
				...state,
				[action.payload.name]: action.payload.value,
				error: "",
			};

		case KNIGHT_ADD:
			return {
				...state,
				knights: [
					...state.knights,
					{
						id: Date.now(),
						name: state.name.trim(),
						age: state.age,
					},
				],
				name: "",
				age: "",
				error: "",
			};

		case KNIGHT_DELETE:
			return {
				...state,
				knights: state.knights.filter(
					(knight) => knight.id !== action.payload
				),
			};

		case KNIGHT_SET_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default knightReducer;
