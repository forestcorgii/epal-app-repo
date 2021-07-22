import React, { lazy,  useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import AuthenticatedUserContext from "./contexts/CognitoContext/index";
import AppBL from "./AppBL";

const Cognito = lazy(() => import("./pages/Cognito/CognitoPage"));
const Home = lazy(() => import("./pages/Seller/HomePage"));

function App() {
  const { auth, setauth } = AppBL();
  return (
    <div className="App">
      <AuthenticatedUserContext.Provider value={{ auth, setauth }}>
        <Suspense fallback={<div>Loading...</div>}>
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
  return (
    <Route {...props}>
      {auth.Username ? <Redirect to={{ pathname: "/" }} /> : children}
    </Route>
  );
}
export default App;
