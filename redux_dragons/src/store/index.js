import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from "redux";
import dragonReducer from "./reducers/dragonReducer";
import knightReducer from "./reducers/knightReducer";
import middlewareReducer from "./reducers/middlewareReducer";
import { addLog } from "./actions/middlewareAction";
import { MIDDLEWARE_ADD_LOG } from "./constants/middlewareConstant";
import coupleReducer from "./reducers/coupleReducer";
import { COUPLE_ADD } from "./constants/coupleConstant";

const logMiddleware = (store) => (next) => (action) => {
	if (action.type !== MIDDLEWARE_ADD_LOG) {
		store.dispatch(addLog(action.type));
	}

	next(action);
};

const coupleMiddleware = (store) => (next) => (action) => {
	// ToDo: Add coupleMiddleware logic here, u need to add a state availaible in the store to keep track of the couples

	if (action.type === COUPLE_ADD) {
		const { dragon, knight } = action.payload;
	}

	next(action);
};

const store = createStore(
	combineReducers({
		dragons: dragonReducer,
		knights: knightReducer,
		logs: middlewareReducer,
		couples: coupleReducer,
	}),
	applyMiddleware(logMiddleware)
);

store.subscribe(() => console.log("store changed", store.getState()));

export default store;
