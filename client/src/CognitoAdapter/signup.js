// ES Modules, e.g. transpiling with Babel
import { CognitoUserPool } from "amazon-cognito-identity-js";

import { poolData } from "./index";
//
export function SignUp(userdata, callback) {
  var userPool = new CognitoUserPool(poolData);
  var attributeList = [];

  // var dataEmail = {
  //   Name: "email",
  //   Value: userdata.email,
  // };

  var dataGroupName = {
    Name: "group_name",
    Value: userdata.group_name,
  };

  // var dataPhoneNumber = {
  //   Name: "phone_number",
  //   Value: userdata.phone_number,
  // };

  // var attributeEmail = new CognitoUserAttribute(dataEmail);
  // var attributePhoneNumber = new CognitoUserAttribute(
  //   dataPhoneNumber
  // );
  // var attributeGroupName = new CognitoUserAttribute(dataGroupName);

  // attributeList.push(attributeEmail);
  // attributeList.push(attributePhoneNumber);
  attributeList.push(dataGroupName);

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

      // var cognitoIdentityServiceProvider =
        // new AWS.CognitoIdentityServiceProvider();

      // var params = {
      //   GroupName: userdata.group_name, //your confirmed user gets added to this group
      //   UserPoolId: userPoolId,
      //   Username: cognitoUser.getUsername(),
      // };

      // if (userAttributes["custom:ManagerID"]) {
      // cognitoIdentityServiceProvider.adminAddUserToGroup(
        // params
        // function (err, data) {
        // if (err) {
        //   callback(err); // uh oh, an error
        // }

        // callback(null, event); // yay! success
        // }
      // );
      // }
    }
  );
}
