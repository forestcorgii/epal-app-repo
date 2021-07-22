const { Schema, model } = require("mongoose");
const Order = require('./Order')
const BuyerSchema = Schema({

	username: String,
	address:String,
	location: [Number],

	orders: [{ type: Schema.Types.ObjectId, ref: Order }],
	
	createdAt: { type: Date, default: Date.now },
});
module.exports = model("Buyer", BuyerSchema);
