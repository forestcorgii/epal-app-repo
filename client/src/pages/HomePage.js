import React, { lazy, useContext } from "react";
import '../assets/main.css'
import Header from "../components/AppComponents/Header/index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AuthenticatedUserContext from "../contexts/CognitoContext/index";

const Profile = lazy(() => import("../pages/ProfilePage"));

export default function Home() {
  const { auth } = useContext(AuthenticatedUserContext);

  return (
    <div>
      <Router>
        <Header auth={auth} className="p-6 mx-auto bg-white shadow-md flex items-center space-x-4">
            <div className="bg-red-700 text-white p-2 rounded-sm">
              <Link to="/">Home</Link>
          </div>
          
            <div>
              <Link to="/profile">Profile</Link>
            </div>
        </Header>
        <PrivateRoute path="/profile">
          <Profile></Profile>
        </PrivateRoute>
      </Router>
    </div>
  );
}

function PrivateRoute({ children, ...props }) {
  const { auth } = useContext(AuthenticatedUserContext);
  console.log("home private route" + JSON.stringify(auth));
  return (
    <Route {...props}>
      {auth.Username ? (
        auth.email_verified ? (
          children
        ) : (
          <Redirect to="/cognito/confirmcode" />
        )
      ) : (
        <Redirect to="/cognito" />
      )}
    </Route>
  );
}
