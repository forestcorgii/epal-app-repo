const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
		max: 45,
	},

	lastname: {
		type: String,
		required: true,
		max: 45,
	},

	address: {
		type: String,
		required: true,
		max: 145,
	},

	location: {
		type: String,
		required: true,
		max: 45,
	},

	storename: {
		type: String,
		required: true,
		max: 45,
	},
});

module.exports = mongoose.model('Profile', profileSchema);
