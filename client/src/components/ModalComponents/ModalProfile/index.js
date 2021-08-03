import BL from "./bl";
import React from "react";

function Modal({ onCancel, storename, description, address }) {
	function cancelHandler() {
		onCancel();
	}
	function doneHandler() {
		onCancel();
	}
	// user_formik, for user personal information form
	// profile_formik, for seller profile form
	const { user_formik, handleProfileSubmit } = BL();

	return (
		<div className="modal-edit-info">
			<div>
				<h2>Personal Information</h2>
				<form onSubmit={user_formik.handleSubmit}>
					<Input
						type="text"
						name="firstName"
						placeholder="Firstname"
						formik={user_formik}
						value={user_formik.values.firsName}
					/>{" "}
					<Input
						type="text"
						name="lastName"
						placeholder="Lastname"
						formik={user_formik}
						value={user_formik.values.lastName}
					/>{" "}
					<Input
						type="text"
						name="middleInitial"
						placeholder="MI"
						formik={user_formik}
						value={user_formik.values.middleInitial}
					/>
					<Input
						type="date"
						name="birthDate"
						formik={user_formik}
						value={user_formik.values.birthDate}
					/>{" "}
					<input type="submit" value="Save Personal Information" />
				</form>
				<hr />
				<h2>Seller Profile</h2>

				<form onSubmit={handleProfileSubmit}>
					<input type="text" name="storeName" />{" "}
					<input type="text" name="address" />{" "}
					<input type="submit" value="Save Seller Profile" />
				</form>
			</div>
			<br />
			<br /> <br />
			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;
			<button className="btn btn--alt" onClick={cancelHandler}>
				{" "}
				Cancel
			</button>{" "}
			&nbsp;
			<button className="btn" onClick={doneHandler}>
				Done
			</button>
		</div>
	);
}
function Input({ formik, value, ...props }) {
	return (
		<input
			{...props}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
		/>
	);
}
export default Modal;
