import { legacy_createStore as createStore } from "redux";
import dragonReducer from "./reducer/dragonReducer";

const store = createStore(dragonReducer, {
	dragons: [],
	dragon: {
		name: "",
	},

	error: "",
});

store.subscribe(() => console.log("store changed", store.getState()));

export default store;
