import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";

import { poolData } from "./index";

export function ConfirmRegistration(username, code, callback) {
	var userPool = new CognitoUserPool(poolData);
	var userData = {
		Username: username,
		Pool: userPool,
	};

	var cognitoUser = new CognitoUser(userData);
	cognitoUser.confirmRegistration(code, true, function (err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}		
    console.log("call result: " + result);
    callback(true)
	});
}
export function ResendConfirmationCode(username) {
	if (username) {
		var userPool = new CognitoUserPool(poolData);
		var userData = {
			Username: username,
			Pool: userPool,
		};

		var cognitoUser = new CognitoUser(userData);
		cognitoUser.resendConfirmationCode(function (err, result) {
			if (err) {
				alert(err.message || JSON.stringify(err));
				return;
			}
			console.log("call result: " + result);
		});
	} else {
		alert("Username not supplied.");
	}
}
