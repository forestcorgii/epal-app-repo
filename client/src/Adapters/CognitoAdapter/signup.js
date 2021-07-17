// ES Modules, e.g. transpiling with Babel
import {
  CognitoUserPool,
} from "amazon-cognito-identity-js";

import {poolData} from "./index";
//
export function SignUp(userdata, callback) {
  
  var userPool = new CognitoUserPool(poolData);
  var attributeList = [];
  
  // var dataEmail = {
  //   Name: "email",
  //   Value: userdata.email,
  // };
  
  // var dataPhoneNumber = {
  //   Name: "phone_number",
  //   Value: userdata.phone_number,
  // };
  
  // var attributeEmail = new CognitoUserAttribute(dataEmail);
  // var attributePhoneNumber = new CognitoUserAttribute(
  //   dataPhoneNumber
  // );
  
  // attributeList.push(attributeEmail);
  // attributeList.push(attributePhoneNumber);
  
  userPool.signUp(
    userdata.email,
    userdata.password,
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
}

