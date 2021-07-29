import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "../../assets/css/seller.css";
import SellerNavigation from "./SellerNavigation";
// import Inventory from "./pages/Seller/Inventory";
// import SellerProfile from "./pages/Seller/SellerProfile ";

function SellerPage() {
	return (
        <div class="Seller-Navigation">
					<Router>
						 <SellerNavigation/>
						<Switch>
							
							{/* <Route path="/Inventory">
								<Inventory/>
							</Route>
							<PublicRoute path="/SellerProfile">
								<SellerProfile />
							</PublicRoute> */}
						</Switch>
					</Router>
		</div>
	);
}

export default SellerPage;
