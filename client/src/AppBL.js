import React, { lazy, useState,useEffect, useContext, Suspense } from "react";
import AuthenticatedUserContext from "./contexts/CognitoContext/index";
import LoginFormBL from "./components/CognitoComponents/Signin/bl";


export default function AppBL(){
  const [auth, setauth] = useState({});
  const { GetSession } = LoginFormBL();
  useEffect(() => {
    GetSession((valid, userdata) => {
      // if (valid) {
        setauth(userdata);        
      // } else {
      //   setauth({});        
      // }
    });
  }, []);

return {auth,setauth}
}