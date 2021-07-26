import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';



function MainNavigation(){
    return(
        
    <header className={classes.header}>

            <div className="merkado-header">
             <Link to ='/' >MERKADO</Link>
            </div>
            
            <div className="header-right">
                <div className="Nav">
                     <Link to ='/'>Products</Link>
                </div>
                <div className="Nav">
                     <Link to ='/Login'>Login</Link>
                </div>
                <div className="Nav">
                     <Link to ='/SellerInfo'>SellerInfo</Link>
                </div>
                <div className="Nav">
                    <Link to ='/SellerPage'>SellerPage</Link>
            </div>
                   
              
                  
                
                  
                
                   
           
            </div>
        

    </header>
    );
}

export default MainNavigation;