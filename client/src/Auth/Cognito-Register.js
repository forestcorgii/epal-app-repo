// ES Modules, e.g. transpiling with Babel
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";

//
var poolData = {
  UserPoolId: "...", // Your user pool id here
  ClientId: "...", // Your client id here
};
var userPool = new CognitoUserPool(poolData);

var attributeList = [];

var dataEmail = {
  Name: "email",
  Value: "email@mydomain.com",
};

var dataPhoneNumber = {
  Name: "phone_number",
  Value: "+15555555555",
};
var attributeEmail = new CognitoUserAttribute(dataEmail);
var attributePhoneNumber = new CognitoUserAttribute(
  dataPhoneNumber
);

attributeList.push(attributeEmail);
attributeList.push(attributePhoneNumber);

userPool.signUp(
  "username",
  "password",
  attributeList,
  null,
  function (err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    var cognitoUser = result.user;
    console.log("user name is " + cognitoUser.getUsername());
  }
);

// 
var userPool = new CognitoUserPool(poolData);
var userData = {
  Username: "username",
  Pool: userPool,
};

var cognitoUser = new CognitoUser(userData);
cognitoUser.confirmRegistration("123456", true, function (err, result) {
  if (err) {
    alert(err.message || JSON.stringify(err));
    return;
  }
  console.log("call result: " + result);
});

cognitoUser.resendConfirmationCode(function (err, result) {
  if (err) {
    alert(err.message || JSON.stringify(err));
    return;
  }
  console.log("call result: " + result);
});