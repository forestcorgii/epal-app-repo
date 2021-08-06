import React from "react";

import businessLogic from "./bl";
import { Link } from "react-router-dom";
import "../../../assets/css/Pages.css";
export default function LoginForm() {
	const { handleSubmit } = businessLogic();

	return (
		<div className="container">
			<center>
				<div className="container-form1">
				{/* black background */}
					<br />
					<p class="login">LOGIN</p>

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
							<br />
							PASSWORD:{" "}
							<input
								name="password"
								type="password"
								placeholder="Password"
								required
							></input>
							<br />
							<br />
							<div className="btn-radio">
								<div className="radios">
								<input type="radio" name="logged_as" value="BUYER" checked={true}/>
								Customer
								
								</div>
								<div className="radios">
								<input type="radio" name="logged_as" value="SELLER"/>
								Retail Owner
								
								</div>
								
							</div>
							<br />
							<br />
							
								<input
									className="button-btn"
									type="submit"
									value="LOGIN"
								></input>
						
						</form>
						<br />
						Don't have account yet?{" "}
						<Link to="/cognito/signup">Register here</Link>
					</div>
				</div>
			</center>
			
		</div>
	);
}
