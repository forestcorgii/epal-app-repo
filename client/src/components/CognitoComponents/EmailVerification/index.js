import React from "react";
import EmailVerifierBL from "./bl";

export default function EmailVerificationForm() {
  const { code, handleSubmit, handleChange } = EmailVerifierBL();
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="code">Verification Code:</label>
			  <input name="code" value={code} onChange={handleChange} />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

