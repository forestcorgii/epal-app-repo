var jwt = require("jsonwebtoken");
var jwkToPem = require("jwk-to-pem");
var jwk = require("../jwks");
var pem = jwkToPem(jwk.keys[1]);
const { AuthenticationError } = require("apollo-server-lambda");

// module.exports = function (req, res, next) {
module.exports = function (req) {
	const token = req.header("authorization");
	// if (!token) return res.status(401).send("Access Denied");
	var user = "";
	// const verified = jwt.verify(
	jwt.verify(
		token,
		pem,
		{ algorithms: ["RS256"] },
		function (err, decodedToken) {
			if (err) {
				// res.status(400).send(err);
				throw new AuthenticationError(err);
			}
			user = decodedToken.username;
		}
	);
	// req.user = verified;
	// next();
	return user;
};
