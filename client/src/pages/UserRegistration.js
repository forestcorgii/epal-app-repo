import { Link } from 'react-router-dom';
import f from './merkado.png';
import './Pages.css';


function UserRegistration(){
  return (
    <div className="container">
    <center>
       <div className="container-form-registration">
          <h2>REGISTRATION</h2>
          <div>
            <form className="form-registration">
              <div className="input-box">
                 <span className="form-details">First name: </span>
                    <input type="text" id="input-align" placeholder="Enter firstname" required></input> <br/>
              </div>
              <div className="input-box">
                 <span className="form-details">Last name: </span>
                    <input type="text" id="input-align " placeholder="Enter lastname" required></input> <br/>
              </div>
              <div className="input-box">
                 <span className="form-details">Middle initial: </span>
                    <input type="text" id="input-align" placeholder="Enter middle initial" required></input> <br/>
              </div>
              <div className="input-box">
                 <span className="form-details">Address: </span>
                    <input type="text" id="input-align" placeholder="Enter address" required></input> <br/>
              </div>
              <div className="input-box">
                 <span className="form-details">Email address: </span>
                    <input type="text" id="input-align" placeholder="Enter email address" required></input> <br/>
              </div>
              <div className="input-box">
                 <span className="form-details">Contact no.: </span>
                    <input type="text" id="input-align" placeholder="Enter contact no." required></input> <br/>
              </div>
              <div className="input-box">
                 <span className="form-details">Password: </span>
                    <input type="text" id="input-align" placeholder="Enter password" required></input> <br/>
              </div>
              <div className="input-box">
                 <span className="form-details">User type: </span>
                      <select>
                        <option name="Buyer">Buyer</option>
                        <option name="Seller">Seller</option>
                      </select>
               <div className="input-box">
                    <center><input type="submit" value="Register" required></input></center> <br/>
              </div>
                 
              </div>





            </form>

         Already have an account? <Link to ='/'> Login here</Link>
            
          </div>
        </div>
   </center>
    <br/>
    <br/> <br/>
    <br/> <br/>
    <br/>
    </div>
);
}
export default UserRegistration;