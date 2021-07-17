import React,{useState,useContext} from "react";

import * as ProfileAdapter from "../Adapters/ProfileAdapter/index";
import AuthenticatedUserContext from "../contexts/CognitoContext/index"

function Profile() {
const auth = useContext(AuthenticatedUserContext)
  const [profile, setProfile] = useState({});

  const Clicked = () => {
    ProfileAdapter.getProfile().then((res) => setProfile(res[0]));
  };

  return (
    <div>
      <div>
        <h3>Welcome: {auth.Username}</h3>
      </div>
      <div>
        <button onClick={() => Clicked()}>send test api</button>
        <p>{JSON.stringify(profile)}</p>
      </div>
    </div>
  );
}

export default Profile;
