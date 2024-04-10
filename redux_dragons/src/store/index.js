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

const logMiddleware = (store) => (next) => (action) => {
	next(action);

	if (action.type !== MIDDLEWARE_ADD_LOG) {
		store.dispatch(addLog(action.type));
	}
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
