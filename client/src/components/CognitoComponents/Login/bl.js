import { useContext } from "react";
import { useHistory } from "react-router-dom";
import * as LoginAdapter from "../../../adapters/CognitoAdapter/signin";
import AuthenticatedUserContext from "../../../contexts/CognitoContext/index";

export default function LoginFormBL() {
  const { auth, setauth } = useContext(AuthenticatedUserContext);
  const SignIn = LoginAdapter.SignIn;
  const SignOut = LoginAdapter.SignOut;
  const GetSession = LoginAdapter.GetSession;

  let history = useHistory();
  // let location = useLocation();

  function handleSignIn(user) {
    SignIn(user, (valid, userdata) => {
      if (valid) {
        setauth(userdata);
        history.push("/");
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const val = {
      Username: e.target.username.value,
      Password: e.target.password.value,
    };

    handleSignIn(val);
  }
  return { auth, SignIn, SignOut, GetSession, setauth,handleSubmit };
}
