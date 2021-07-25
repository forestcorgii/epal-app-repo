import { useContext,useEffect } from "react";
import { useHistory } from "react-router-dom";
import {AuthContext} from "../../../contexts/Auth";


export default function LoginFormBL() {
	let history = useHistory();
	const { user, relogin, login } = useContext(AuthContext);
	// useEffect(() => {
	// 	if (!user) {
	// 		relogin();
	// 	}
	// }, []);
	// useEffect(() => {
	// 	if (user) {
	// 		history.push("/");
	// 	}
	// }, [user]);



  function handleSubmit(e) {
    e.preventDefault();
    const val = {
      Username: e.target.username.value,
      Password: e.target.password.value,
    };

    login(val);
  }
  return { handleSubmit };
}
