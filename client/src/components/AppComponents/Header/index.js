import React from "react";
import "../../../assets/main.css";
import LoginFormBL from "../../CognitoComponents/Signin/bl";
export default function Header({ children, auth, ...props }) {
  const { SignOut } = LoginFormBL();
  return (
    <div {...props}>
      {children}
      <div className="flex-grow flex">
        <button
          className="ml-auto"
          onClick={() => {
            SignOut();
            window.location.reload();
          }}
        >
          {auth.email}
        </button>
      </div>
    </div>
  );
}
