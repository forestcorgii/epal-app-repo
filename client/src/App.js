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
import SellerProfile from "./pages/Seller/SellerProfile";
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
const SellerHome = lazy(() => import("./pages/Seller/HomePage"));
// const BuyerHome = lazy(() => import("./pages/Buyer/HomePage"));
function App() {
	return (
		<div>
			<AuthProvider>
				
				<Suspense fallback={<div>Loading..</div>}>
					<Router>
						 <MainNavigation />
						{/* {user && user.logged_as === "SELLER" ? (
							<Redirect to="seller" />
						) : null
						// <BuyerHome />
						} */}
						<Switch>
{/* 
Public Route - Cannot Access if Authenticated
Private Route - Cannot Access if not Authenticated
Route - Can be Accessed eitherway
*/}
							<PrivateRoute path="/seller">
								<SellerHome />
							</PrivateRoute>
							<Route path="/" exact>
								<p>BUYER</p>
								{/* <BuyerHome /> */}
							</Route>
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

{/* ADDED THESE ROUTES FOR TESTING */}
							<PublicRoute path="/Products">
								<Products />
							</PublicRoute>
							<PrivateRoute path="/Inventory">
								<Inventory />
							</PrivateRoute>
							<PrivateRoute path="/SellerProfile">
								<SellerProfile />
							</PrivateRoute>
							{/* <PublicRoute path="/Verification">
								<Verification/>
							</PublicRoute> */}

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
			{/* {children} */}
			{user && user.email_verified ? (
				user.logged_as === "SELLER" ? (
					<Redirect to={{ pathname: "/seller" }} />
				) : (
					<Redirect to={{ pathname: "/" }} />					
				)
			) : (
				children
			)}
		</Route>
	);
}
export default App;
