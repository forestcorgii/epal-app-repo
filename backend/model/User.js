const { Schema, model } = require("mongoose");

const Seller = require("./Seller");
const Buyer = require("./Buyer");

const UserSchema = Schema({
	username: String,
	profile: {
		seller: { type: Schema.Types.ObjectId, ref: 'Seller' },
		buyer: { type: Schema.Types.ObjectId, ref: 'Buyer' },		
	},
	createdAt: { type: Date, default: Date.now },
});

module.exports = model("User", UserSchema);
