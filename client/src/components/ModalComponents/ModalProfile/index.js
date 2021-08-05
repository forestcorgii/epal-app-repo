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
			<center>
				<h2>Personal Information</h2>
				<div className="modal-info-form">
			
						<form onSubmit={user_formik.handleSubmit}>
							<div class="modal-info-details">
							<Input
								type="text"
								name="firstName"
								placeholder="Firstname"
								formik={user_formik}
								value={user_formik.values.firsName}
							/>{" "}
							</div>
							<div class="modal-info-details">
							<Input
								type="text"
								name="lastName"
								placeholder="Lastname"
								formik={user_formik}
								value={user_formik.values.lastName}
							/>{" "}
							</div>
							<div class="modal-info-details">
							<Input
								type="text"
								name="middleInitial"
								placeholder="MI"
								formik={user_formik}
								value={user_formik.values.middleInitial}
							/>
							</div>
							<div class="modal-info-details">
							<Input
								type="date"
								name="birthDate"
								formik={user_formik}
								value={user_formik.values.birthDate}
							/>{" "}
							</div>
							
							
							
							<input type="submit" value="Save Personal Information" />
						</form>
								
				</div>
				<hr />
				<h2>Seller Profile</h2>
				<div className="modal-info-form">

				<form onSubmit={handleProfileSubmit}>
					<div class="modal-info-details">
					<input type="text" name="storename" placeholder="Store Name" />
					</div>
					<div class="modal-info-details">
					<input type="text" name="description" placeholder="Description" />
					</div>
					<div class="modal-info-details">
					<input
						type="text"
						name="address"
						placeholder="Address"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					</div>
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
			</center>
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
