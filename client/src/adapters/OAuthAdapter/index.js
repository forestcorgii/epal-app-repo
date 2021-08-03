import axios from "axios";

export default function RefreshToken() {
	const token_expiration = localStorage.getItem(
		"merkado_here_token_expiration"
	);

	if (Date.now() > token_expiration) {
		return "eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJ1MVd6WGU3alNDcmhMZ3Y2TkhBNiIsImlhdCI6MTYyNzk5MDUyMCwiZXhwIjoxNjI4MDc2OTIwLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLjREcHVfaGhtajJZd0w1SW0yUl9jdEEuWURtNEE5OV9teDhVV1hqakZfVFowTE1jengzQTR6MWxvMmwyYkVWQTlyLWZUZDByMjVoZ25PX3BQZHgycUJyek9ZS2NJMjJkOVFPMElJY1UyVVJVN20xeGNoeFlSU19pcXYyZWFLT0NiXzU3dF83Q2pCYzh0eGI4a0RMbms2X2xNY0lXcGtkZXdRaEFFSnNrWGtULVNBLlRaYldHRGpEMGlubnUwQmU1QjF1a1p4M05iSnUxTUFvemlmMTVZT1k4ams.Qa4M1w1jJMLPyVJj3b-iPCdN3zLg-sVUFcOsWaGZPE2t2Jy6amuTzJ1KiNATELb0Zpw172A8b0EUbxa_XrSBCXz33m0RTNvmhnXca9FFTIEwnZ2cIvtql8IrGlK1aqVzAk-deUA4214rCuvekurhRzMbAfaZTVbXQpq2cvSzSZXc9T_iVdzWyjG3JV4Ht6OTK691iETLV3qaaWmCdlr6NVNfsjQfEQMMAlWwXYKPY1tUwMJdjGxrYvfs3_F4bdgHTfDG-scUabSQpKE5nii9r5eeV1awjG5UqDB77O1vdfVbcVqF5O8t5hwRNbtXZOpoeO-CDqT2HETjULRBBFFOwg";
		var axios = require("axios");
		var qs = require("qs");
		var data = qs.stringify({
			grant_type: "client_credentials",
		});
		var config = {
			method: "post",
			url: "https://account.api.here.com/oauth2/token",
			headers: {
				Authorization: `OAuth oauth_consumer_key="9kzyHdY1izfsG1MBY1rZKA",oauth_signature_method="HMAC-SHA256",oauth_timestamp="${Date.now()
					.toString()
					.substring(
						0,
						10
					)}",oauth_nonce="v4om5O2ATed",oauth_version="1.0",oauth_signature="t5NXZeC2p4WQS%2F9jOYjD2MprHToPNFV56Uviq7OpQH4%3D"`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
			data: data,
		};

		return axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				localStorage.setItem("merkado_here_token", response.data.access_token);
				localStorage.setItem(
					"merkado_here_token_expiration",
					new Date(Date.now()).setSeconds(response.data.expires_in)
				);
				return response.data.access_token;
			})
			.catch(function (error) {
				console.log(error);
			});
	} else {
		return localStorage.getItem("merkado_here_token");
	}
}
