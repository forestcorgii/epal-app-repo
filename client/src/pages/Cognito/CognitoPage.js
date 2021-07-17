// import env from "react-dotenv"
import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import LoginForm from "../../components/CognitoComponents/LoginComponent/index";

const RegistrationForm = lazy(() =>
  import("../../components/CognitoComponents/RegistrationComponents/index")
);
const EmailVerificationForm = lazy(()=>import("../../components/CognitoComponents/EmailVerificationComponent/index"))
export default function Login() {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
        <Link to={`${url}/`}>Sign In</Link>
      </div>
      <div>
        <Link to={`${url}/signup`}>Sign Up</Link>
      </div>
      <div>
        <Link to={`${url}/confirmcode`}></Link>
      </div>
      <Switch>
        <Route path={`${path}/signup`}>
          <RegistrationForm />
        </Route>
        <Route path={`${path}/verifyemail`}>
          <EmailVerificationForm />
        </Route>
        <Route path={`${path}/`}>
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}
