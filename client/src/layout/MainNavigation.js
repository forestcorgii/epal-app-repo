import { Link, useHistory } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

import "./MainNavigation.css";
import merkado from "./Merkado4.png";
function MainNavigation() {
	const { user } = useContext(AuthContext);

	return (
		<div className="header">
			{/* <div className="merkado-header">
			<Link to="/"><img src={merkado} height="85px;" width="82px" /></Link>
				&nbsp; <h1><Link to="/">MERKADO</Link></h1>
			</div> */}
			<div className="header-nav">
				<div className="Nav">
					<Link to="/">HOME</Link>
				</div>
				<div className="Nav">
					<Link to="/About Us">ABOUT US</Link>
				</div>
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
		<div>
				<p onClick={() => { history.push("/cognito");}} >LOGIN</p>
		</div>
		
		// <input
		// 	type="button"
		// 	value="Login"
		// 	onClick={() => {
		// 		history.push("/cognito");
		// 	}}
		// />
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
