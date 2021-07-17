import React, { lazy, useContext } from "react";
import Header from "../components/AppComponents/HeaderComponent/index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AuthenticatedUserContext from "../contexts/CognitoContext/index";

const Profile = lazy(() => import("../pages/ProfilePage"));

export default function Home() {
  // const { auth } = useContext(AuthenticatedUserContext);

  return (
    <div>
      <Router>
        <Header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
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
