const initialState = {
	dragons: [],
	dragon: {
		name: "",
	},

	error: "",
};

const dragonReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_VALUE":
			return {
				...state,
				dragon: {
					...state.dragon,
					[action.payload.name]: action.payload.value,
				},
				error: "",
			};

		case "ADD_DRAGON":
			return {
				...state,
				dragons: [
					...state.dragons,
					{
						id: Date.now(),
						...state.dragon,
					},
				],
				dragon: {
					name: "",
				},
				error: "",
			};

		case "DELETE_DRAGON":
			return {
				...state,
				dragons: state.dragons.filter(
					(dragon) => dragon.id !== action.payload
				),
			};

		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default dragonReducer;
