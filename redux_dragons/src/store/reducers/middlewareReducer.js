import { MIDDLEWARE_ADD_LOG } from "../constants/middlewareConstant";

const initialState = {
	logs: [],
};

let id = 1;

const middlewareReducer = (state = initialState, action) => {
	switch (action.type) {
		case MIDDLEWARE_ADD_LOG:
			return {
				...state,
				logs: [
					...state.logs,
					{
						id: id++,
						actionName: action.payload,
						time: new Date().toLocaleTimeString(),
						date: new Date().toLocaleDateString(),
					},
				],
			};

		default:
			return state;
	}
};

export default middlewareReducer;
