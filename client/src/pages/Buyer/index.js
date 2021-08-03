import {
	Link,
	BrowserRouter as Router,
	Route,
	useRouteMatch,
	Redirect,
	Switch,
} from "react-router-dom";
import "../../assets/css/buyer.css";
import React, { lazy, useEffect, Suspense, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import Products from "./Products/Products";

import CognitoBL from "../../components/CognitoComponents/Signin/bl";

function HomePage() {
	const {} = CognitoBL();

	let { path, url } = useRouteMatch();
	return (
		<div className="buyer-homepage">
			<Suspense fallback={<div>Loading</div>}>
				<Router>
					<div className="navigation">
						<div className="nav-btn">
							<Link to={`${url}/products`}> Home</Link>
						</div>
						<div className="nav-btn">
							<Link to={`${url}/orders`}>
								<span class="material-icons">shopping_cart</span>Orders
							</Link>
						</div>
						<div className="nav-btn">
							<Link to={`${url}/profile`}>Profile</Link>
						</div>
						{/* <div className="logout">
						<LogoutButton />
				</div> */}
					</div>
					<div>
						<Switch>
							<Route path={`${path}/`} exact>
								<Redirect to={`${path}/products`} />
							</Route>
							<Route path={`${path}/products`}>
								<Products />
							</Route>
							<Route path={`${path}/orders`}>Orders{/* <Inventory /> */}</Route>
							<Route path={`${path}/profile`}>
								Profile
								{/* <Profile /> */}
							</Route>
						</Switch>
					</div>
				</Router>
			</Suspense>
		</div>
	);
}

export default HomePage;
