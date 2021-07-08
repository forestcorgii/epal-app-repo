const express = require("express");
var helmet = require("helmet");
const app = express();
const port = 3000;
var compression = require("compression");


app.use(helmet());

app.use(compression());

// Set up mongoose connection
var dev_db_url = 'mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true'
var mongoDB = process.env.MONGODB_URI || dev_db_url;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
