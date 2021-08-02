import { Link, useHistory } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

import "./MainNavigation.css";
import merkado from "./Merkado4.png";
function MainNavigation() {
	const { user } = useContext(AuthContext);

	return (
		<div className="header">
			<div className="merkado-header">
				<img src={merkado} height="85px;" width="82px" />
				&nbsp; <h1>MERKADO</h1>
			</div>

			<div className="header-nav">
				{/* <div className="Nav">
					<Link to="/">Home</Link>
					<Link to="/Products">Products</Link>
				</div>
				<div className="Nav">
					<Link to="/Inventory">Inventory</Link>
				</div>
				<div className="Nav">
					<Link to="/About Us">About Us</Link>
				</div>
				<div className="Nav">
					<Link to="/cognito">Login</Link>
				</div> */}
			</div>
			<div className="nav-search">
				<input type="search" placeholder="Search here"></input>
			</div>
			<div className="btn-logout">
				{user ? (
					<>
						{user.email}
						<LogoutButton />
					</>
				) : (
					<LoginButton />
				)}

				{/* <input type="button" value=" Logout" placeholder="Logout" /> */}
			</div>
		</div>
	);
}
function LoginButton() {
	let history = useHistory();
	return (
		<input
			type="button"
			value="Login"
			onClick={() => {
				history.push("/cognito");
			}}
		/>
	);
}
function LogoutButton() {
	const { logout } = useContext(AuthContext);
	return (
		<input
			type="button"
			onClick={() => {
				logout();
				window.location.reload();
			}}
			value="Logout"
		/>
	);
}

export default MainNavigation;
