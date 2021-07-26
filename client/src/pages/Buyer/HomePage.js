
import { Link } from "react-router-dom";
import "../../assets/css/buyer.css";
// import React, { lazy, Suspense, useContext } from "react";
// import { AuthProvider, AuthContext } from "./contexts/Auth";

function HomePage(){

    return (
        <div className="buyer-homepage">
            <div className="navigation">
               <div className="nav-btn">
               <Link to ='/BuyerHomePage'>Home</Link>
                </div> 
                <div className="nav-btn">
               <Link to ='/BuyerOrder'>Order</Link>
                </div> 
                <div className="nav-btn">
               <Link to ='/BuyerCheckout'>Checkout</Link>
                </div> 
                <div className="nav-btn">
               <Link to ='/BuyerProfile'>Profile</Link>
                </div> 
                
            
                
            </div>
            <div className="nav-btn-logout">
                    <Link to ='/BuyerProfile'> LOGOUT</Link>
                </div>
            {/* <div className="buyer-date-time">
            July 27, 2021 5:22PM
            </div> */}
            
            {/* <LogoutButton/> */}
            
        </div>
      );
    }
// function LogoutButton() {
//         const { logout } = useContext(AuthContext);
//         return (<button onClick={() => { logout(); window.location.reload()}}>Logout</button>)
// }
    

export default HomePage;