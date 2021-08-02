import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useRouteMatch,
} from "react-router-dom";
import React, { lazy, Suspense, useContext } from "react";
import MainNavigation from "./layout/MainNavigation";
import { AuthProvider, AuthContext } from "./contexts/Auth";
//Change
import Inventory from "./pages/Seller/Inventory";
import Products from "./pages/Seller/Products";
import SellerProfile from "./pages/Seller/Profile";
import Verification from "./components/CognitoComponents/EmailVerification/index";

// import BuyerInfo from "./pages/Buyer/BuyerInfo";
// import Checkout from "./pages/Buyer/Checkout";
// import HowToPage from "./pages/HowToPage";
// import Locate from "./pages/Buyer/Locate";
// import Order from "./pages/Buyer/Order";
// import Products from "./pages/Seller/Products";
// import SellerInfo from "./pages/Seller/SellerInfo";
// import SellerPage from "./pages/Seller/SellerPage";

import Cognito from "./pages/CognitoPage";
import AboutHome from "./pages/CognitoPage";

const BuyerHome = lazy(() => import("./pages/Buyer/HomePage"));
const SellerHome = lazy(() => import("./pages/Seller/HomePage"));
// const AboutHome = lazy(() => import("./pages/AboutHome"));

// Public Route - Cannot Access if Authenticated
// Private Route - Cannot Access if not Authenticated
// BuyerRoute - Cannot be accessed if Authenticated as a Seller(Only for Anonymous User and Buyer)

function App() {
	return (
		<div>
			<AuthProvider>
				<Suspense fallback={<div>Loading..</div>}>
					<Router>
						<MainNavigation />
						<Switch>
							<Route path="/" exact>
								<Redirect to="/buyer"/>
							</Route>
							<PrivateRoute path="/seller">
								<SellerHome />
							</PrivateRoute>
							<PublicRoute path="/cognito">
								<Cognito />
							</PublicRoute>
							<Route path="/" exact>
								<Redirect to="/aboutUs"/>
								<AboutHome />
							</Route>
							<BuyerRoute path="/buyer">
								<BuyerHome />
							</BuyerRoute>
						</Switch>
					</Router>
				</Suspense>
			</AuthProvider>
		</div>
	);
}

function PrivateRoute({ children, ...props }) {
	const { user } = useContext(AuthContext);
	console.log("private route " + JSON.stringify(user));
	return (
		<Route {...props}>
			{user && user.Username && user.email_verified ? (
				children
			) : (
				<Redirect to="/cognito" />
			)}
		</Route>
	);
}
function BuyerRoute({ children, ...props }) {
	const { user } = useContext(AuthContext);
	console.log("buyer route " + JSON.stringify(user));
	return (
		<Route {...props}>
			{user && user.email_verified ? (
				user.logged_as === "SELLER" ? (
					<Redirect to="/seller" />
				) : (
					children
				)
			) : (
				children
			)}
		</Route>
	);
}

function PublicRoute({ children, ...props }) {
	const { user } = useContext(AuthContext);
	console.log("public route " + JSON.stringify(user));
	return (
		<Route {...props}>
			{user && user.email_verified ? (
				user.logged_as === "SELLER" ? (
					<Redirect to="/seller" />
				) : (
					<Redirect to="/buyer" />
				)
			) : (
				children
			)}
		</Route>
	);
}

export default App;
