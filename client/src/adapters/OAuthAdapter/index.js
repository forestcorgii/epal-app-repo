import axios from "axios";

export default function RefreshToken() {
	const token_expiration = localStorage.getItem(
		"merkado_here_token_expiration"
	);

	if (Date.now() > token_expiration) {
		return "eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJ1MVd6WGU3alNDcmhMZ3Y2TkhBNiIsImlhdCI6MTYyODE0NDc0MCwiZXhwIjoxNjI4MjMxMTQwLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnE4WkJJb1hubVVRUTBJTF9OTTV0V0EuTllXNFlVZ09PSmJmS3VOcm5VNnUtWVQ0U1ZZTXNmaVU3ZEMycWdRQm5lc2R0OG45d0dnTXFxeTJmV2VCLUNOVTAwTDJYUXVsZGF5NXVab1U1LVZneW95Q1pGUF81YVJJdlktYlptOGFNRWFDTU9BLXpoazBFVXplc1Y0RTN1eFFiWDBQQjZlQUpxcjF0bFBMYUpMVWZBLkZ6ZHNsblZhcEl3UUFDaXVubm1XV0ZoLXF0R09NRVFuTXFqOWJHYTdxZlk.lfgzZt2MA95dL0VkjNuj_ACehWqqor34NIrvPTo6YLPjRzwliRhNdAbakgvUKoSMHx3tUFYO-9Brc8GdX2-dK6vwkZ1JaaNNP8SNCRRwJZ5aJcB3UA-y4h1u_hq0itRKbC4C5K_JdEUlDqTFER1sQ_jj-pC_TjF7b0ACE8dHRaMb7CWdNvm_rGYZmCgy60_-UBO_RNivPzYFIAUydeXAZmbUCiYxFFASVFMKoQDgFU7DJxCP246cL5o7OzyoA-0QBb55TatzMnzd4Oh5_OzBjA0CoMIotk0pca4Agm8Udy8eQKykG3F59nW5L0T_QBhMUVEKbRYwBWq5AMrwEJHNPQ";
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
