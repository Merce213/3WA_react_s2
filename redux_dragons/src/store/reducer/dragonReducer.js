const initialState = {
	dragons: [],
	name: "",
	error: "",
};

const dragonReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_VALUE":
			return {
				...state,
				[action.payload.name]: action.payload.value,
				error: "",
			};

		case "ADD_DRAGON":
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
