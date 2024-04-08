import { createContext, useContext } from "react";
import { usePostReducer } from "../reducers/PostReducer";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
	const post = usePostReducer();

	return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
	const context = useContext(PostContext);

	if (!context) {
		throw new Error(
			"usePostContext must be used within a PostContextProvider"
		);
	}

	return context;
};
