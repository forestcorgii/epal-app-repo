import React from "react";

import {
	
	Route,
	Redirect,
	Switch,
	useRouteMatch,
	Link,
} from "react-router-dom";
import "./Products.css";
// import Products from "./Products";
import Inventory from "./Inventory";
import Profile from "./Profile";
function SellerNavigation() {
	let { path, url } = useRouteMatch();

	return (
		// const { loading, error,data } = HomePageBL();
		<div className="buyer-homepage">
			{/* <div class="dropdown">
				<button class="dropbtn">Categories</button>
				<div class="dropdown-content">
					<a href="#">Clothes</a>
					<a href="#">Shoes</a>
					<a href="#">Accesories</a>
					<a href="#">Fruits</a>
					<a href="#">Vegetables</a>
				</div>
			</div> */}

			{/* <Suspense fallback={<div>Loading...</div>}> */}
			{/* <Router> */}
			<div className="navigation">
				{/* <div className="nav-btn">
							<Link to={`${url}/`}>Home</Link>
						</div> */}
				{/* <div className="nav-btn">
							<Link to={`${url}/products`}>My Products</Link>
						</div> */}
				<div className="nav-btn">
					<Link to={`${url}/profile`}>Seller's Profile</Link>
				</div>
				<div className="nav-btn">
					<Link to={`${url}/inventory`}>Inventory</Link>
				</div>
			</div>

			{/* <div className="nav-btn-logout">
						<Link to="/"> LOGOUT</Link>
					</div> */}

			<Switch>
				<Route path={`${path}/`} exact>
					<Redirect to={`${url}/profile`} />
				</Route>
				{/* <Route path={`${path}/products`} exact>
					<div>products</div>
					<Products />
				</Route> */}
				<Route path={`${path}/inventory`}>
					<Inventory />
				</Route>
				<Route path={`${path}/profile`}>
					<Profile />
				</Route>
				{/* <Route path={`${path}/`} exact>
							<div>Seller Home</div>
						</Route> */}
			</Switch>
			{/* </Router> */}
			{/* </Suspense> */}
			{/* <div className="buyer-date-time">
		July 27, 2021 5:22PM
		</div> */}
		</div>
	);
}

export default SellerNavigation;
