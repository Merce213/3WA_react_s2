import { Routes, Route } from "react-router-dom";
import Result from "./pages/Result";
import Rules from "./pages/Rules";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/rules" element={<Rules />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</>
	);
};

export default App;
