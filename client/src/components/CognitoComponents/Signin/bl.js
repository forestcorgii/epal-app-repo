import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";

export default function LoginFormBL() {
	let history = useHistory();
	const { user, relogin, login, saveUserData } = useContext(AuthContext);
	// useEffect(() => {
	// }, []);
	useEffect(() => {
		if (!user) {
			relogin((valid, result) => {
				if (valid) {
					saveUserData(result);
					if (result.UserNotConfirmed) {
						history.push("/cognito");
					} else {
						history.push("/");
					}
				}
			});
		}
		// if (user) {
		// }
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		const val = {
			Username: e.target.username.value,
			Password: e.target.password.value,
			logged_as: e.target.logged_as.value,
		};

		login(val, (valid, UserNotConfirmed, result) => {
			if (valid) {
				saveUserData(result);
				if (UserNotConfirmed) {
					history.push("/cognito");
				} else {
					// history.push("/");
					window.location.reload()
				}
			}
		});
		// history.push(`/cognito/verifyemail/${val.Username}`);
		// history.push(`/`);
	}

	return { handleSubmit, relogin };
}
