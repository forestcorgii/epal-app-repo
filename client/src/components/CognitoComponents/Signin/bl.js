import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";

export default function LoginFormBL() {
	let history = useHistory();
	const { user, relogin, login } = useContext(AuthContext);
	// useEffect(() => {
	// }, []);
	useEffect(() => {
		if (!user) {
			relogin();
		}
		if (user) {
			if (user.UserNotConfirmed) {
				history.push("/cognito");
			} else {
				history.push("/");
			}
		}
	}, [user]);

	function handleSubmit(e) {
		e.preventDefault();
		const val = {
			Username: e.target.username.value,
			Password: e.target.password.value,
			logged_as: e.target.logged_as.value,
		};

		login(val);
		// history.push(`/cognito/verifyemail/${val.Username}`);
		history.push(`/`);
	}


	return { handleSubmit };
}
