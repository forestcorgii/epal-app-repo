const { Schema, model } = require("mongoose");
const Product = require('./Product')
const Order = require('./Order')
const SellerSchema = Schema({
	username: String,
	storename:String,
	address:String,
	location: [Number],

	products: [{ type: Schema.Types.ObjectId, ref: Product }],
	orders: [{ type: Schema.Types.ObjectId, ref: Order }],
	
	createdAt: { type: Date, default: Date.now },
});
module.exports = model("Seller", SellerSchema);
