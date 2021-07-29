import React from "react";

import EmailVerifierBL from "./bl";
import "../../../assets/css/Pages.css";

export default function EmailVerificationForm() {
	const { handleSubmit, resendConfirmationCode } = EmailVerifierBL();
	return (
		<div className="verification">
			<center>
				<form onSubmit={handleSubmit}>
					<br />
					<br />
					<div className="verification-code">
						<label htmlFor="code">Verification Code</label>
						<br />
						<br />
						<input name="code" placeholder="Enter code here" />
					</div>
					<br />
					<br />
					<div className="btn-submit">
						<input type="button" onClick={()=>resendConfirmationCode()} value="Send another code" />{" "}
						<input type="submit" value="Submit" />
					</div>
				</form>
			</center>
		</div>
	);
}
