import { createContext, useContext } from "react";
import { useYamsReducer } from "../reducer/YamsReducer";

const YamsContext = createContext();

export const YamsContextProvider = ({ children }) => {
	const [state, dispatch] = useYamsReducer();

	return (
		<YamsContext.Provider value={{ state, dispatch }}>
			{children}
		</YamsContext.Provider>
	);
};

export const useYamsContext = () => {
	const context = useContext(YamsContext);

	if (!context) {
		throw new Error(
			"useYamsContext must be used within a YamsContextProvider"
		);
	}

	return context;
};
