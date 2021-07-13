import "./App.css";
import * as Auth from "./Auth/Cognito-Login";
import React, { useState,useEffect } from "react";

function App() {
  const [auth, setauth] = useState({});
  
  useEffect(() => {
    Auth.GetSession(setauth);    
  }, [])

  return (
    <div className="App">
      <h3>Welcome: {auth.Username}</h3>
      <label>username:</label>
      <input onChange={(e) => setauth({ ...auth, Username: e.target.value })} />
      <label>password:</label>
      <input onChange={(e) => setauth({ ...auth, Password: e.target.value })} />
      <button onClick={() => Auth.Login(auth)}>Login</button>
    </div>
  );
}

export default App;
