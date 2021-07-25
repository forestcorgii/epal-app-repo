import React from "react";
import { Link } from "react-router-dom";
import RegistrationFormBL from "./bl";
// import f from "../merkado.png";
import "../../../assets/css/Pages.css";

export default function Registration() {
	const { formik } = RegistrationFormBL();
	return (
		<div className="container">
			<center>
				<div className="container-form-registration">
					<h2>REGISTRATION</h2>
					<div>
						<form className="form-registration" onSubmit={formik.handleSubmit}>
							<div className="input-box">
								<span className="form-details">First name: </span>
								<input
									id="email"
									name="email"
									type="text"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
								{formik.touched.email && formik.errors.email ? (
									<div>{formik.errors.email}</div>
								) : null}{" "}
								<br />
							</div>{" "}
							<div className="input-box">
								<span className="form-details">Password: </span>
								<input
									id="password"
									name="password"
									type="password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
								{formik.touched.password && formik.errors.password ? (
									<div>{formik.errors.password}</div>
								) : null}{" "}
								<br />
							</div>{" "}
							<br />
							<div className="radio">
								<label>
									<input
										type="radio"
										name="logged_as"
										value="BUYER"
										defaultChecked
									/>
									Customer
								</label>
							</div>
							<div className="radio">
								<label>
									<input type="radio" name="logged_as" value="SELLER" />
									Retail Owner
								</label>
							</div>{" "}
							<input type="submit" value="Register" />
						</form>
						Already have an account? <Link to="/"> Login here</Link>
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
