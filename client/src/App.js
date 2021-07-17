import "./App.css";
import React, { lazy, useState, useEffect, useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import AuthenticatedUserContext from "./contexts/CognitoContext/index";
import AppBL from "./AppBL";

const Cognito = lazy(() => import("./pages/Cognito/CognitoPage"));
// const Register = lazy(() => import("./pages/RegisterPage"));
const Home = lazy(() => import("./pages/HomePage"));

function App() {
  const { auth, setauth } = AppBL();
  return (
    <div className="App">
      <AuthenticatedUserContext.Provider value={{ auth, setauth }}>
        <Suspense fallback={<div>Loading...</div>}>
          <h3>Welcome{" " + JSON.stringify(auth)}</h3>
          <Router>
            <Switch>
              <PublicRoute path="/cognito" auth={auth}>
                <Cognito />
              </PublicRoute>
              <PrivateRoute path="/" auth={auth}>
                <Home></Home>
              </PrivateRoute>
            </Switch>
          </Router>
        </Suspense>
      </AuthenticatedUserContext.Provider>
    </div>
  );
}

function PrivateRoute({ children, ...props }) {
  const { auth } = useContext(AuthenticatedUserContext);
  // console.log("private route" + JSON.stringify(auth));
  return (
    <Route {...props}>
      {auth.Username && auth.email_verified ? (
        children
      ) : (
        <Redirect to={{ pathname: "/cognito" }} />
      )}
    </Route>
  );
}

function PublicRoute({ children, ...props }) {
  const { auth } = useContext(AuthenticatedUserContext);
  // console.log("public route" + JSON.stringify(auth));
  return (
    <Route {...props}>
      {auth.Username ? <Redirect to={{ pathname: "/" }} /> : children}
    </Route>
  );
}
export default App;
