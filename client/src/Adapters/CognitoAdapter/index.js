import env from "react-dotenv";
export var poolData = {
  UserPoolId: env.REACT_APP_USER_POOL_ID, // Your user pool id here
  ClientId: env.REACT_APP_APP_CLIENT_ID, // Your client id here
};

export var identityPoolId = env.REACT_APP_IDENTITY_POOL_ID;
export var authKey = `cognito-idp.${env.REACT_APP_AWS_REGION}.amazonaws.com/${env.REACT_APP_USER_POOL_ID}`;
