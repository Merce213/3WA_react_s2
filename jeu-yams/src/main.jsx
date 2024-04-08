import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { YamsContextProvider } from "./context/YamsContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<YamsContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</YamsContextProvider>
	</React.StrictMode>
);
