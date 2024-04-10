import {
	DRAGON_SET_VALUE,
	DRAGON_ADD,
	DRAGON_SET_ERROR,
	DRAGON_DELETE,
} from "../constants/dragonConstant";

const initialState = {
	dragons: [
		{
			id: 1712747513860,
			name: "Smaug",
		},
		{
			id: 1712747513862,
			name: "Drogon",
		},
	],
	name: "",
	error: "",
};

const dragonReducer = (state = initialState, action) => {
	switch (action.type) {
		case DRAGON_SET_VALUE:
			return {
				...state,
				[action.payload.name]: action.payload.value,
				error: "",
			};

		case DRAGON_ADD:
			return {
				...state,
				dragons: [
					...state.dragons,
					{
						id: Date.now(),
						name: state.name.trim(),
					},
				],
				name: "",
				error: "",
			};

		case DRAGON_DELETE:
			return {
				...state,
				dragons: state.dragons.filter(
					(dragon) => dragon.id !== action.payload
				),
			};

		case DRAGON_SET_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default dragonReducer;
