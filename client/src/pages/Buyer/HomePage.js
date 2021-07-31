import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "../../assets/css/buyer.css";
import React, { lazy, Suspense, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import Products from "./Products";


function HomePage() {
	return (
			<div className="buyer-homepage">
				<div className="navigation">
					<div className="nav-btn">
						<Link to="/">Home</Link>
					</div>
					<div className="nav-btn">
						<Link to="/BuyerOrder">Order</Link>
					</div>
					<div className="nav-btn">
						<Link to="/BuyerCheckout">Checkout</Link>
					</div>
					<div className="nav-btn">
						<Link to="/BuyerProfile">Profile</Link>
					</div>

					{/* <div className="logout">
						<LogoutButton />
				</div> */}

					
				</div>
				
				
				<div>
					<Router>
						<Route path="/">
							<Products />
						</Route>
					</Router>
				</div>
			</div>
	);
}
function LogoutButton() {
	const { logout } = useContext(AuthContext);
	return (
		<button
			onClick={() => {
				logout();
				window.location.reload();
			}}
		>
			Logout
		</button>
	);
}

export default HomePage;
