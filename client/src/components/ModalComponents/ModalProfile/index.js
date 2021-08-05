import BL from "./bl";
import React from "react";

function Modal({ onCancel }) {
	function cancelHandler() {
		onCancel();
	}
	function doneHandler() {
		onCancel();
	}
	// user_formik, for user personal information form
	// profile_formik, for seller profile form
	const { user_formik, handleProfileSubmit, handleAddressSearch } = BL();
	const { text, setText, results } = handleAddressSearch();

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
					<input type="text" name="storename" placeholder="Store Name" />
					<input type="text" name="description" placeholder="Description" />
					<input
						type="text"
						name="address"
						placeholder="Address"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					{results && (
						<>
							{results.loading && <div>...</div>}
							{results.error && <div>Error: {results.error.message}</div>}
							{results.result && (
								<div>
									{results.result.address}
									<input
										type="button"
										onClick={() => setText(results.result.address)}
										value="Accept"
									/>
									<input
										type="hidden"
										name="lng"
										value={results.result.lng}
									/>{" "}
									<input
										type="hidden"
										name="lat"
										value={results.result.lat}
									/>
								</div>
							)}{" "}
						</>
					)}
					<input type="submit" value="Save Store Information" />
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
