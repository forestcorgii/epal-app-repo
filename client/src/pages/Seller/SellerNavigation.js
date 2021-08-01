import React, { Suspense } from "react";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	useRouteMatch,
	Link,
} from "react-router-dom";

import Products from "./Products";
import Inventory from "./Inventory/Inventory";
import Profile from './SellerProfile'
function SellerNavigation() {
	let { path, url } = useRouteMatch();

	return (
		// const { loading, error,data } = HomePageBL();
		<div className="buyer-homepage">
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<div className="navigation">
						<div className="nav-btn">
							<Link to={`${url}/`}>Home</Link>
						</div>
						<div className="nav-btn">
							<Link to={`${url}/products`}>Products</Link>
						</div>
						<div className="nav-btn">
							<Link to={`${url}/inventory`}>Inventory</Link>
						</div>
						<div className="nav-btn">
							<Link to={`${url}/profile`}>SProfile</Link>
						</div>
					</div>

					<div className="nav-btn-logout">
						<Link to="/"> LOGOUT</Link>
					</div>
					
					<Switch>
						<Route path={`${path}/products`}>
							<div>products</div>
							<Products />
						</Route>
						<Route path={`${path}/inventory`}>
							<Inventory />
						</Route>
						<Route path={`${path}/profile`}>
							<Profile/>
						</Route>
						<Route path={`${path}/`} exact>
							<div>Seller Home</div>
						</Route>
					</Switch>
				</Router>
			</Suspense>
			{/* <div className="buyer-date-time">
		July 27, 2021 5:22PM
		</div> */}
		</div>
	);
}

export default SellerNavigation;
