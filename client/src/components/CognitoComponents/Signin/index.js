import React from "react";

import businessLogic from "./bl";
import { Link } from "react-router-dom";
import f from "../../../assets/img/merkado.png"
import "../../../assets/css/Pages.css";
export default function LoginForm() {
  const { handleSubmit } = businessLogic();

  return (
		<div className="container">
			<center>
				<br />
				<br />
				<div className="container-form1">
					<center>
						<h1>LOGIN</h1>
					</center>
					<br />
					<div className="container-form-login">
						<form onSubmit={handleSubmit}>
							USERNAME:{" "}
							<input
								name="Username"
								type="text"
								placeholder="Enter Username"
								required
							></input>{" "}
							<br />
							PASSWORD:{" "}
							<input
								name="Password"
								type="password"
								placeholder="Password"
								required
							></input>
							<br />
							<br />
							<center>
								<input type="submit" value=" Login "></input>
							</center>
						</form>
						<br />
						Don't have account yet?{" "}
						<Link to="/cognito/signup">Register here</Link>
					</div>
				</div>
			</center>
			<br />
			<br /> <br />
			<br /> <br />
			<br />
		</div>
	);
}
