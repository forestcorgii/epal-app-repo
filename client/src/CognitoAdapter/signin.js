import * as AWS from "aws-sdk/global";

// import * as xhr from "../xhr/index";
import {authKey, identityPoolId, poolData } from "./index";

import {
	AuthenticationDetails,
	CognitoUserPool,
	CognitoUser,
} from "amazon-cognito-identity-js";

export function GetSession(callback) {
  var userPool = new CognitoUserPool(poolData);
	var cognitoUser = userPool.getCurrentUser();

	if (cognitoUser != null) {
		cognitoUser.getSession(function (err, session) {
			if (err) {
				alert(err.message || JSON.stringify(err));
				return;
			}

			// xhr.setAccessKey(session.getAccessToken().getJwtToken());
			localStorage.setItem(
				"merkado-token",
				session.getAccessToken().getJwtToken()
			);

			console.log("session validity: " + session.isValid());

			// NOTE: getSession must be called to authenticate user before calling getUserAttributes
			cognitoUser.getUserAttributes(function (err, attributes) {
				if (err) {
					// Handle error
				} else {
					// Do something with attributes
				}
			});

			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: identityPoolId, // your identity pool id here
				Logins: {
					// Change the key below according to the specific region your user pool is in.
					authKey: session.getIdToken().getJwtToken(),
				},
			});
			cognitoUser.getUserData((err, result) => {
				if (!err) {
					result = getAttributes(result);
					callback(true, result);
				} else {
					callback(false, {});
				}
			});
			// Instantiate aws sdk service objects now that the credentials have been updated.
			// example: var s3 = new AWS.S3();
		});
	}
}

export function SignIn(authenticationData, callback) {
	var authenticationDetails = new AuthenticationDetails(authenticationData);

	var userPool = new CognitoUserPool(poolData);
	var userData = {
		Username: authenticationData.Username,
		Pool: userPool,
	};
	var cognitoUser = new CognitoUser(userData);

	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: function (result) {
			// xhr.setAccessKey(result.getAccessToken().getJwtToken());
			localStorage.setItem(
				"merkado-token",
				result.getAccessToken().getJwtToken()
			);

			//POTENTIAL: Region needs to be set if not already set previously elsewhere.
			AWS.config.region = "us-east-1";

			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: identityPoolId, // your identity pool id here
				Logins: {
					// Change the key below according to the specific region your user pool is in.
					[authKey]: result.getIdToken().getJwtToken(),
				},
			});
			//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
			AWS.config.credentials.refresh((error) => {
				if (error) {
					console.error(error);
				} else {
					// Instantiate aws sdk service objects now that the credentials have been updated.
					// example: var s3 = new AWS.S3();
					console.log("Successfully logged!");
					cognitoUser.getUserData((err, result) => {
						if (err) {
							alert(err.message || JSON.stringify(err));
							return;
						}

						result = getAttributes(result);
						callback(true, result);
					});
				}
			});
		},

		onFailure: function (err) {
			alert(err.message || JSON.stringify(err));
			callback(false, {});
		},
	});
}

function getAttributes(result) {
	var attrs = {};
	for (let i = 1; i < result.UserAttributes.length; i++) {
		attrs[result.UserAttributes[i].Name] = result.UserAttributes[i].Value;
	}
	return {
		...attrs,
		Username: result.Username,
	};
}

export function SignOut() {
	var userPool = new CognitoUserPool(poolData);
	var cognitoUser = userPool.getCurrentUser();
	cognitoUser.signOut();
	console.log("signed out");
}
