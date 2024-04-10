import { COUPLE_ADD } from "../constants/coupleConstant";

const initialState = {
	couples: [],
};

const coupleReducer = (state = initialState, action) => {
	switch (action.type) {
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
			};
		default:
			return state;
	}
};

export default coupleReducer;
