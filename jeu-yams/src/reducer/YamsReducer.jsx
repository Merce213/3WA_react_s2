import { useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const useYamsReducer = () => useReducer(reducer, initialState);
