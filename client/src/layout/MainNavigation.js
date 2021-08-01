import { Link } from "react-router-dom";
import "./MainNavigation.css";
import merkado from "./Merkado4.png";
function MainNavigation() {
	return (
		<div className="header">
			<div className="merkado-header">
				<img src={merkado} height="85px;" width="82px" />
				&nbsp; <h1>MERKADO</h1>
			</div>

			<div className="header-nav">
					<div className="Nav">
						<Link to="/">Home</Link>
					</div>

					{/* TESTING PAGES */}
					<div className="Nav">
							<Link to ='/Products'>Products</Link>
							</div>
							<div className="Nav">
							<Link to ='/Inventory'>Inventory</Link>
							</div>
							<div className="Nav">
							<Link to ='/SProfile'>Profile</Link>
							</div> 
							<div className="Nav">
								<Link to="/cognito">Login</Link>
							</div>
					</div>
					<div className="nav-search">
						<input type="search" placeholder="Search here"></input>
					</div>
					<div className="btn-logout">
						<input type="button" value=" Logout" placeholder="Logout"/>
					</div>
					
			
		</div>
	);
}
// function LogoutButton() {
// 	const { logout } = useContext(AuthContext);
// 	return (
// 		<button
// 			onClick={() => {
// 				logout();
// 				window.location.reload();
// 			}}
// 		>
// 			Logout
// 		</button>
// 	);
// }

export default MainNavigation;
