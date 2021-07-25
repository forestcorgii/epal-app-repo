import React from "react";

import businessLogic from "./bl";
import { Link } from "react-router-dom";
import f from "../../../assets/img/merkado.png";
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
								name="username"
								type="text"
								placeholder="Enter Username"
								required
							></input>{" "}
							<br />
							PASSWORD:{" "}
							<input
								name="password"
								type="password"
								placeholder="Password"
								required
							></input>
							<br />
							<div className="radio">
								<label>
									<input type="radio" name="logged_as" value="BUYER" checked={true} />
									Customer
								</label>
							</div>
							<div className="radio">
								<label>
									<input type="radio" name="logged_as" value="SELLER" />
									Retail Owner
								</label>
							</div>
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
