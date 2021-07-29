import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "../../assets/css/seller.css";
import SellerNavigation from "./SellerNavigation";

function SellerPage() {
	return (
		<div class="Seller-Navigation">
			<Router>
				<SellerNavigation />
				<Switch>
					{/* <Route path="/Inventory">
						<Inventory />
					</Route> */}
					{/* <PublicRoute path="/AboutUs">
						<AboutHome />
					</PublicRoute> */}
				</Switch>
			</Router>
		</div>
	);
}

export default SellerPage;
