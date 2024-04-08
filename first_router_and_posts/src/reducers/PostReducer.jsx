import { useReducer } from "react";

const initialState = {
	posts: [],
	title: "",
	content: "",
	error: "",
};

const postReducer = (state, action) => {
	switch (action.type) {
		case "SET_VALUE":
			return {
				...state,
				[action.payload.name]: action.payload.value,
				error: "",
			};

		case "ADD_POST":
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: Date.now(),
						title: state.title.trim(),
						content: state.content.trim(),
					},
				],
				title: "",
				content: "",
				error: "",
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

export const usePostReducer = () => useReducer(postReducer, initialState);
