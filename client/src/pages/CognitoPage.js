// import env from "react-dotenv"
import React, { lazy, useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import { AuthContext } from "../contexts/Auth";
import LoginForm from "../components/CognitoComponents/Signin/index";

const RegistrationForm = lazy(() =>
  import("../components/CognitoComponents/Signup/index")
);
const EmailVerificationForm = lazy(() =>
  import("../components/CognitoComponents/EmailVerification/index")
);

export default function Login() {
  let { path, url } = useRouteMatch();
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {user && user.Username && !user.email_verified ? <Redirect to={`${url}/verifyemail`} /> : null}

      <Switch>
        <Route path={`${path}/signup`}>
          <RegistrationForm />
        </Route>
        <Route path={`${path}/verifyemail/:username`}>
          <EmailVerificationForm />
        </Route>
        <Route path={`${path}/`}>
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}
