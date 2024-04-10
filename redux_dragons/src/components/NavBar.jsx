import { NavLink } from "react-router-dom";

const checkIsActive = ({ isActive }) => {
	return isActive
		? {
				color: "orange",
		  }
		: {};
};

const NavBar = () => {
	return (
		<header>
			<nav style={{ display: "flex", gap: "1rem" }}>
				<NavLink style={checkIsActive} to="/" end>
					Home
				</NavLink>
				<NavLink style={checkIsActive} to="/dragons">
					Dragons
				</NavLink>
				<NavLink style={checkIsActive} to="/knights">
					Knights
				</NavLink>
			</nav>
		</header>
	);
};

export default NavBar;