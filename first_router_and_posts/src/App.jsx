import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import "./App.css";

const App = () => {
	return (
		<>
			<nav
				style={{
					display: "flex",
					gap: "1rem",
					padding: "1rem",
					marginBottom: "1rem",
					alignItems: "center",
				}}
			>
				<NavLink
					to="/"
					style={({ isActive }) =>
						isActive
							? {
									color: "red",
							  }
							: {}
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/new-post"
					style={({ isActive }) =>
						isActive
							? {
									color: "red",
							  }
							: {}
					}
				>
					New Post
				</NavLink>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new-post" element={<NewPost />} />
			</Routes>
		</>
	);
};

export default App;
