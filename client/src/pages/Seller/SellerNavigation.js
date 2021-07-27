import { Link } from "react-router-dom";
function SellerNavigation(){
    return(
            // const { loading, error,data } = HomePageBL();
		<div className="buyer-homepage">
		<div className="navigation">
		   <div className="nav-btn">
		   <Link to ='/'>Home</Link>
			</div> 
			<div className="nav-btn">
		   <Link to ='/Products'>Products</Link>
			</div> 
			<div className="nav-btn">
		   <Link to ='/Inventory'>Inventory</Link>
			</div> 
			<div className="nav-btn">
		   <Link to ='/SellerProfile'>SProfile</Link>
			</div> 
		</div>
		<div className="nav-btn-logout">
				<Link to ='/'> LOGOUT</Link>
			</div>
		{/* <div className="buyer-date-time">
		July 27, 2021 5:22PM
		</div> */}
		
        </div>

    );
  }

export default SellerNavigation;