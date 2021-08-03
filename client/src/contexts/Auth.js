import { createContext, useReducer } from "react";
import { SignIn, SignOut, GetSession } from "../adapters/CognitoAdapter/signin";
import { ConfirmRegistration } from "../adapters/CognitoAdapter/emailverifier";
export const AuthContext = createContext({
	user: null,
	login: (userData, callback) => {},
	relogin: (callback) => {
		console.log("new");
	},
	saveUserData: (userData) => {},
	logout: () => {},
});
export function authReducer(state, action) {
	let userData;
	let logged_as;
	switch (action.type) {
		case "LOGIN":
			SignIn(action.payload, (valid, result) => {
				logged_as = action.payload.logged_as;
				localStorage.setItem("merkado_logged_as", logged_as);
				if (valid) {
					userData = { logged_as, ...result };
					action.callback(true,true,userData);
				} else {
					if (!result.email_verified) {
						// redirect to verify page
						userData = { logged_as, ...result };
						action.callback(true, true,userData);
					} else {
						action.callback(false,false,userData);
					}
				}
			});

			return { ...state, user: userData };
		case "RELOGIN":
			GetSession((valid, result) => {
				if (valid) {
					logged_as = localStorage.getItem("merkado_logged_as");
					userData = { logged_as, ...result };
				}
				action.callback(valid, userData);
			});
			return { ...state, user: userData };
		case "SAVE_USER_DATA":
			return { ...state, user: action.payload };
		case "LOGOUT":
			SignOut();
			return { ...state, user: null };
		case "VERIFY":
			ConfirmRegistration("", "");
			return;
		default:
			return state;
	}
}
export function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	function login(userData, callback) {
		dispatch({ type: "LOGIN", payload: userData, callback: callback });
	}
	function relogin(callback) {
		dispatch({ type: "RELOGIN", callback: callback });
	}
	function saveUserData(userData) {
		dispatch({ type: "SAVE_USER_DATA", payload: userData });
	}
	function logout() {
		dispatch({ type: "LOGOUT" });
	}
	return (
		<AuthContext.Provider
			value={{ user: state.user, login, logout, relogin,saveUserData }}
			{...props}
		/>
	);
}
