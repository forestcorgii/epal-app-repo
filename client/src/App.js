import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import React, { lazy, Suspense, useContext } from "react";

// import MainNavigation from "./layout/MainNavigation";
import { AuthProvider, AuthContext } from "./contexts/Auth";

// import AboutHome from "./pages/AboutHome";
// import BuyerInfo from "./pages/Buyer/BuyerInfo";
// import Checkout from "./pages/Buyer/Checkout";
// import HowToPage from "./pages/HowToPage";
// import Locate from "./pages/Buyer/Locate";
// import Order from "./pages/Buyer/Order";
// import Products from "./pages/Seller/Products";
// import SellerInfo from "./pages/Seller/SellerInfo";
// import SellerPage from "./pages/Seller/SellerPage";

import Cognito from "./pages/CognitoPage";
const SellerHome = lazy(() => import("./pages/Seller/HomePage"));
// const BuyerHome = lazy(() => import("./pages/Buyer/HomePage"));
function App() {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<AuthProvider>
				<Suspense fallback={<div>Loading..</div>}>
					<Router>
						{/* <MainNavigation /> */}
						{/* {user && user.logged_as === "SELLER" ? (
							<Redirect to="seller" />
						) : null
						// <BuyerHome />
						} */}
						<Switch>
							<PrivateRoute path="/" exact>
								<SellerHome />
							</PrivateRoute>
							{/* <PrivateRoute path="/buyer">
								<BuyerHome />
							</PrivateRoute> */}
							{/* <PrivateRoute path="/" exact>
								<Products />
							</PrivateRoute>
							<Route path="/buyerinfo">
								<BuyerInfo />
							</Route>
							<Route path="/checkout">
								<Checkout />
							</Route>
							<Route path="/howtopage">
								<HowToPage />
							</Route>
							<Route path="/locate">
								<Locate />
							</Route>
							<Route path="/order">
								<Order />
							</Route>
							<Route path="/sellerInfo">
								<SellerInfo />
							</Route>
							<Route path="/sellerPage">
								<SellerPage />
							</Route>
							<Route path="/Login">
								<UserLogin />
							</Route>
							<Route path="/userRegistration">
								<UserRegistration />
							</Route> */}
							<PublicRoute path="/cognito">
								<Cognito />
							</PublicRoute>
							{/* <PublicRoute path="/AboutUs">
								<AboutHome />
							</PublicRoute> */}
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
				<Redirect to={{ pathname: "/cognito" }} />
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
					<Redirect to={{ pathname: "/seller" }} />
				) : (
					<Redirect to={{ pathname: "/buyer" }} />
				)
			) : (
				children
			)}
		</Route>
	);
}
export default App;
