import * as AWS from "aws-sdk/global";
import env from "react-dotenv";

import {
	AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";


var poolData = {
  UserPoolId: env.USER_POOL_ID, // Your user pool id here
  ClientId: env.APP_CLIENT_ID, // Your client id here
};

var identityPoolId = env.IDENTITY_POOL_ID;
var authKey = `cognito-idp.${env.AWS_REGION}.amazonaws.com/${env.USER_POOL_ID}`;

export var AccessKey;


export function GetSession(setauth) {
	var userPool = new CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }

      AccessKey = session.getAccessToken().getJwtToken();
      
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
          authKey: session
            .getIdToken()
            .getJwtToken(),
        },
		});
		 setauth({Username: cognitoUser.getUsername()});
      // Instantiate aws sdk service objects now that the credentials have been updated.
      // example: var s3 = new AWS.S3();
    });
  }
}

export function Login(authenticationData) {

  var authenticationDetails = new AuthenticationDetails(
    authenticationData
  );

  var userPool = new CognitoUserPool(poolData);
  var userData = {
    Username: authenticationData.Username,
    Pool: userPool,
	};
	
	var cognitoUser = new CognitoUser(userData);
	
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      // var accessToken = result.getAccessToken().getJwtToken();

      //POTENTIAL: Region needs to be set if not already set previously elsewhere.
      AWS.config.region = "us-east-1";

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identityPoolId, // your identity pool id here
        Logins: {
          // Change the key below according to the specific region your user pool is in.
          [authKey] : result
            .getIdToken()
            .getJwtToken(),
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
          return true;
        }
      });
    },

    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
      return false;
    },
  });
}
