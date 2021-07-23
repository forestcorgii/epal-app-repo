import  { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../contexts/Auth";

export default function BL() {
	let history = useHistory();
	const [cred, setcred] = useState({ Username: "", Password: "" });
	const {user, relogin, login } = useContext(AuthContext);

	useEffect(() => {
		if (!user) {
			relogin(() => {
				history.push("/");
			});
		}
	});


	const handleSubmit = (e) => {
		e.preventDefault();
		login(cred, () => {
			history.push("/");
		});
	};

	const handleChange = (e) => {
		setcred({ ...cred, [e.target.name]: e.target.value });
	};

	return { cred, handleSubmit, handleChange };
}
