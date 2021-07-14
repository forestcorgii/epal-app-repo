import "./App.css";
import * as Auth from "./Auth/Cognito-Login";
import React, { useState, useEffect } from "react";

function App() {
  const [auth, setauth] = useState({});
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    var header = new Headers();
    header.append("Authorization", Auth.AccessKey);
    var requestOptions = {
      method: "GET",
      headers: header,
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:3001/api/profiles`,
      requestOptions);
    
return await response.json();

  };

  const Clicked = () => {
    getProfile().then(res => setProfile(res[0]));
  }

  useEffect(() => {
    Auth.GetSession(setauth);
  }, []);

  useEffect(() => {
    // getProfile();
  }, [setauth]);

  return (
    <div
      className="App"
      onSubmit={(e) => {
        e.preventDefault();
        const val = {
          username: e.target.username.value,
          password: e.target.password.value,
        };
        if (Auth.Login(val)) {
          setauth(val);
        }
      }}
    >
      <div>
        <h3>Welcome: {auth.Username}</h3>
        <form>
          <label>username:</label>
          <input
          // onChange={(e) => setauth({ ...auth, Username: e.target.value })}
          />
          <label>password:</label>
          <input
            type="password"
            // onChange={(e) => setauth({ ...auth, Password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <button onClick={()=>Clicked()}>send test api</button>
        <p>{profile.firstname}</p>
      </div>
    </div>
  );
}

export default App;
