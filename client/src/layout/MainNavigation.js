import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';


function MainNavigation(){
    return(
    <header className={classes.header}>
    
        <div className={classes.logo}> 
        
        
        
         </div>
         <br/>

        <div className="header">
         <Link to ='/' >MERKADO</Link>
            <div className="header-right">
          
                
                   <Link to ='/'>Products</Link>
              
                   <Link to ='/Login'>Login</Link>
                
                   <Link to ='/SellerInfo'>SellerInfo</Link>
                
                   <Link to ='/SellerPage'>SellerPage</Link>
           
            </div>
        </div>

    </header>
    );
}

export default MainNavigation;