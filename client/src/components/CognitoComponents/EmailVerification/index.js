import React from "react";
import EmailVerifierBL from "./bl";
import "../../../assets/css/Pages.css";

export default function EmailVerificationForm() {
  const { code, handleSubmit, handleChange } = EmailVerifierBL();
  return (
    <div className="verification">
      <center>
        <form onSubmit={handleSubmit}>
          <br/><br/>
        <div className="verification-code">
          <label htmlFor="code">Verification Code</label>
          <br/><br/>
          <input name="code" value={code} onChange={handleChange} placeholder="Enter code here"/>
        </div><br/><br/>
        <div className="btn-submit">
          <input type="submit"  value="Send another code"/> <input type="submit" value="Submit"/>
        </div>
      </form>
      </center>
    </div>
  );
}

