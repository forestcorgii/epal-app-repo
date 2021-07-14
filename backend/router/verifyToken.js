var jwt = require("jsonwebtoken");
var jwkToPem = require("jwk-to-pem");
var jwk = require('../jwks');
// console.log(jwk);
var pem = jwkToPem(jwk.keys[1]);

module.exports = function (req, res, next) {
	const token = req.header("authorization");
	// if (!token) return res.status(401).send("Access Denied");
	
	const verified = jwt.verify(
			token,
			pem,
			{ algorithms: ["RS256"] },
			function (err, decodedToken) {
				if (err) {
					res.status(400).send(err);					
				}
			}
		);
		req.user = verified;
		next();
	
};

