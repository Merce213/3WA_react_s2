import {
	COUPLE_ADD,
	COUPLE_SET_ERROR,
	COUPLE_SET_VALUE,
} from "../constants/coupleConstant";

const initialState = {
	dragon: "",
	knight: "",
	couples: [],
	error: "",
};

const coupleReducer = (state = initialState, action) => {
	switch (action.type) {
		case COUPLE_SET_VALUE:
			return {
				...state,
				[action.payload.name]: action.payload.value,
				error: "",
			};

		case COUPLE_ADD:
			return {
				...state,
				couples: [
					...state.couples,
					{
						id: Date.now(),
						...action.payload,
					},
				],
				dragon: "",
				knight: "",
			};

		case COUPLE_SET_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default coupleReducer;
