import React from "react";
import { Link } from "react-router-dom";
import RegistrationFormBL from "./bl";
// import f from "../merkado.png";
import "../../../assets/css/Pages.css";

export default function Registration() {
	const { formik } = RegistrationFormBL();
	return (
		<div className="container">
				<br/><br/>
			<center>
				<div className="container-form-registration">
					<br/><br/><br/>
					<h1>REGISTRATION</h1>
					<div>
					<br/>
						<form onSubmit={formik.handleSubmit}>
							<div className="input-box">
								<span className="form-details">EMAIL:</span> 
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<input
									id="email"
									name="email"
									type="text"
									placeholder="Enter Email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									required
								/>
								{formik.touched.email && formik.errors.email ? (
									<div>{formik.errors.email}</div>
								) : null}{" "}
							
							</div>{" "}
							<div className="input-box">
								<span className="form-details">PASSWORD: </span>
								&nbsp;
								<input
									id="password"
									name="password"
									type="password"
									placeholder="Enter New Password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
									required
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
							<br />
							<input type="submit" value="Register" />
						</form>
						<br /><br />
						Already have an account? <Link to="/"> Login here</Link>
					</div>
				</div>
			</center>
		</div>
	);
}
