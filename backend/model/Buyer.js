const { Schema, model } = require("mongoose");
const Order = require('./Order')
const User = require("./User");
const BuyerSchema = Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	location: [Number],
	orders: [{ type: Schema.Types.ObjectId, ref: Order }],
	createdAt: { type: Date, default: Date.now },
});
module.exports = model("Buyer", BuyerSchema);
