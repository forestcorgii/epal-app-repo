import { createContext, useReducer } from "react";
import * as CognitoAdapter from "../CognitoAdapter/signin";
export const AuthContext = createContext({
	user: null,
	login: (userData) => {},
	relogin: () => {},
	logout: () => {},
});
export function authReducer(state, action) {
	let userData;
	switch (action.type) {
		case "LOGIN":
			CognitoAdapter.SignIn(action.payload, (valid, result) => {
				if (valid) {
					userData = result;
				}
			});
			return { ...state, user: userData };
		case "RELOGIN":
			CognitoAdapter.GetSession((valid, result) => {
				if (valid) {
					userData = result;
				}
			});
			return { ...state, user: userData };
		case "LOGOUT":
			CognitoAdapter.SignOut();
			return { ...state, user: null };
		default:
			return state;
	}
}
export function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, { user: null });

	function login(userData, callback) {
		dispatch({ type: "LOGIN", payload: userData });
		callback();
	}
	function relogin(callback) {
		dispatch({ type: "RELOGIN" });
		callback();
	}
	function logout() {
		dispatch({ type: "LOGOUT" });
	}
	return (
		<AuthContext.Provider
			value={{ user: state.user, login, logout, relogin }}
			{...props}
		/>
	);
}
