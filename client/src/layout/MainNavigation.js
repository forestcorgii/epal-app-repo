import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';


function MainNavigation(){
    return(
    <header className={classes.header}>
    
        <div className={classes.logo}> 
        
        <Link to ='/' >MERKADO</Link>
        
         </div>
         <br/>
        <nav>
            <ul>
                <li>
                   <Link to ='/'>Products</Link>
                </li>
                <li>
                   <Link to ='/Login'>Login</Link>
                </li>
                <li>
                   <Link to ='/SellerInfo'>SellerInfo</Link>
                </li>
                <li>
                   <Link to ='/SellerPage'>SellerPage</Link>
                </li>
                <li></li>
               
            </ul>
        
        
        </nav>
    

    </header>
    );
}

export default MainNavigation;