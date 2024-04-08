import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { PostContextProvider } from "./context/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<PostContextProvider>
				<App />
			</PostContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
