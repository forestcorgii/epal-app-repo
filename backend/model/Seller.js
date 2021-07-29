const { Schema, model } = require("mongoose");
const Product = require("./Product");
const Order = require("./Order");
const User = require("./User");
const SellerSchema = Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	storename: String,
	descrtiption: String,
	category: String,
	address: String,
	location: [Number],
	products: [{ type: Schema.Types.ObjectId, ref: Product }],
	orders: [{ type: Schema.Types.ObjectId, ref: Order }],
	createdAt: { type: Date, default: Date.now },
});
module.exports = model("Seller", SellerSchema);
