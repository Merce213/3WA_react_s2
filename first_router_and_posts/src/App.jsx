import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";

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
					to="/post/new"
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
				<Route path="/post/new" element={<NewPost />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="*" element={<h1>Page Not found</h1>} />
			</Routes>
		</>
	);
};

export default App;
