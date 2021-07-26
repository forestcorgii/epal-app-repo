import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/buyer.css";

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
            <div className="buyer-search">
                
            <span>Search: </span> <input type="search"></input>
            </div>
            <div className="buyer-date-time">
            July 27, 2021 5:22PM
            </div>
        </div>
      );
    }

export default HomePage;