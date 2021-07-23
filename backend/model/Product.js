const { Schema, model } = require("mongoose");
const ProductSchema = Schema({
	name: String,
	price: String,
	description: String,
	technicalInformation:{size:[Number],color:String,},
	categories:[String],
	createdAt: { type: Date, default: Date.now },
	seller: {
		type: Schema.Types.ObjectId,
		ref: "Seller",
	},
});
module.exports = model("Product", ProductSchema);
