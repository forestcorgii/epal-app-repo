import { createContext, useReducer } from "react";

export const AuthContext = createContext({
	user: null,
	load: (userData) => {},
	relogin: () => {},
	logout: () => {},
});


export function authReducer(state, action) {
	switch (action.type) {
	
		default:
			return state;
	}
}
export function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, {
		user: null
	});

	function login(userData) {
		dispatch({ type: "LOGIN", payload: userData });
	}
	function relogin() {
		dispatch({ type: "RELOGIN" });
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

