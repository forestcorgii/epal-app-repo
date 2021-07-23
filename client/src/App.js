import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import AboutHome from "./pages/AboutHome";
import BuyerInfo from "./pages/BuyerInfo";
import Checkout from "./pages/Checkout";
import HowToPage from "./pages/HowToPage";
import Locate from "./pages/Locate";
import Order from "./pages/Order";
import Products from "./pages/Products";
import SellerInfo from "./pages/SellerInfo";
import SellerPage from "./pages/SellerPage";
import UserRegistration from "./pages/UserRegistration";

import MainNavigation from "./layout/MainNavigation";
import React, { useState, lazy, Suspense, useEffect, useContext } from "react";
import { AuthProvider } from "./contexts/Auth";
// const UserLogin = lazy(() => import("./pages/UserLogin"));
import UserLogin from "./pages/UserLogin";
import { AuthContext } from "./contexts/Auth";
function App() {
	
	const { user } = useContext(AuthContext);
	console.log(user)
	return (
		<div>
			<AuthProvider>
				<Suspense fallback={<div>Loading..</div>}>
					<Router>
						<MainNavigation />
						<Switch>
							<PrivateRoute path="/" exact>
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
							<Route path="/Login">
								<UserLogin />
							</Route>
							<Route path="/sellerInfo">
								<SellerInfo />
							</Route>
							<Route path="/sellerPage">
								<SellerPage />
							</Route>
							<Route path="/userRegistration">
								<UserRegistration />
							</Route>
							<Route path="/AboutUs">
								<AboutHome />
							</Route>
						</Switch>
					</Router>
				</Suspense>
			</AuthProvider>
		</div>
	);
}

function PrivateRoute({ children, ...props }) {
	const { user } = useContext(AuthContext);
	return (
		<Route {...props}>
			{user && user.Username && user.email_verified ? (
				children
			) : (
				<Redirect to={{ pathname: "/Login" }} />
			)}
		</Route>
	);
}
export default App;
