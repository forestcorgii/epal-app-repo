import {Link} from 'react-router-dom';
import './MainNavigation.css';
import merkado from './Merkado4.png';

function MainNavigation(){
    return(
        
    <div className="header">
          <div className="merkado-header">
              <img src={merkado} height="85px;" width="82px"/>
               &nbsp; <h1>MERKADO</h1>
          
          </div>
               
          <div className="header-nav">
                <div className="Nav">
                         <Link to ='/'>Home</Link>
                    </div>
                    <div className="Nav">
                         <Link to ='/'>Products</Link>
                    </div>
                    <div className="Nav">
                         <Link to ='/Login'>Login</Link>
                    </div>
                    <div className="Nav">
                         <Link to ='/SHomePage'>SHomePage</Link>
                    </div>
                    <div className="Nav">
                         <Link to ='/BHomePage'>BHomepage</Link>
                     </div>
              
            </div>
          <div className="nav-search">
                    <input type="search" placeholder="Search here"></input>
          </div>

          </div>
    );
}

export default MainNavigation;