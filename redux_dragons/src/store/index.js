import { combineReducers, legacy_createStore as createStore } from "redux";
import dragonReducer from "./reducers/dragonReducer";
import knightReducer from "./reducers/knightReducer";

const store = createStore(
	combineReducers({
		dragons: dragonReducer,
		knights: knightReducer,
	})
);

store.subscribe(() => console.log("store changed", store.getState()));

export default store;
