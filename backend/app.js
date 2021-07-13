const express = require("express");
const app = express();

const env = require("dotenv").config();

var helmet = require("helmet");
var compression = require("compression");
// console.log(process.env.MONGODB_URI);
// console.log(env.PORT);
const mongoose = require("mongoose");
mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to mongoose.");
	}
);

app.use(express.json());
app.use(helmet());
app.use(compression());

// Set up mongoose connection
// var dev_db_url = 'mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true'
// var mongoDB = process.env.MONGODB_URI || dev_db_url;


const port = process.env.PORT | 80
app.listen(port,'0.0.0.0', () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
