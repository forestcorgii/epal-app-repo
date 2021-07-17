import React from "react";

export const user = {
	auth: undefined,
	setauth:undefined
}

const AuthenticatedUserContext = React.createContext(user);
export default AuthenticatedUserContext;