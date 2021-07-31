// const Express = require("express");
// const app = new Express();
// const port = 3000;

// app.use(Express.static("public"));
require("dotenv").config();

const router = require("express").Router();

router.get("/", (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

router.get("/upload", (req, res) => {
	upload(req.query)
		.then((url) => {
			res.json({ url: url });
		})
		.catch((e) => {
			console.log(e);
		});
});

module.exports = router

const aws = require("aws-sdk");
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN
const BUCKET = process.env.BUCKET;

aws.config.update({
	accessKeyId: AWS_ACCESS_KEY,
	secretAccessKey: AWS_SECRET_ACCESS_KEY,
	sessionToken: AWS_SESSION_TOKEN,
});

function upload(file) {
	const s3 = new aws.S3();
	const params = {
		Bucket: BUCKET,
		Key: file.filename,
		Expires: 60,
		ContentType: file.filetype,
		ACL: 'public-read',

	};

	return new Promise((resolve, reject) => {
		s3.getSignedUrl("putObject", params, (err, url) => {
			if (err) {
				reject(err);
			}
			// console.log(url)
			resolve(url);
		});
	});
}
