import { legacy_createStore as createStore } from "redux";
import dragonReducer from "./reducers/dragonReducer";

const store = createStore(dragonReducer);

store.subscribe(() => console.log("store changed", store.getState()));

export default store;
