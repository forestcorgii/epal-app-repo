import React from "react";
import LoginFormBL from "../../CognitoComponents/LoginComponent/bl"
export default function Header({children}) {
	const { SignOut } = LoginFormBL();
	return <div>
		{children}
		<button onClick={() => {
			SignOut();
			window.location.reload();
		}}>Logout</button>
	</div>;
}
