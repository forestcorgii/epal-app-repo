import { Link } from "react-router-dom";
// import f from "./merkado.png";
import "./Pages.css";
import UserLoginBL from "./UserLoginBL";

function UserLogin() {
	const { cred, handleSubmit, handleChange } = UserLoginBL();

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
								value={cred.username}
								onChange={handleChange}
								type="text"
								placeholder="Enter Username"
								required
							></input>{" "}
							<br />
							PASSWORD:{" "}
							<input
								name="Password"
								value={cred.password}
								onChange={handleChange}
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
						<Link to="/UserRegistration">Register here</Link>
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
export default UserLogin;
