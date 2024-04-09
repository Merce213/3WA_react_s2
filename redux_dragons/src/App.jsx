import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dragons from "./pages/Dragons";
import Knights from "./pages/Knights";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<>
			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dragons" element={<Dragons />} />
					<Route path="/knights" element={<Knights />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
