const Seller = require("../../model/Seller");
const Product = require("../../model/Product");
const { UserInputError } = require("apollo-server-lambda");
const User = require("../../model/User");
module.exports = {
	Query: {
		async availableProductList(_, { location }, context) {
			const res = await Seller.aggregate()
				.near({
					near: location, //[121.0392, 14.61185],
					distanceField: "distance",
					maxDistance: 1000,
					key: "location",
					// includeLocs: "location",
				})
				.lookup({
					from: "products",
					localField: "products",
					foreignField: "_id",
					as: "productArr",
				})
				.exec();
			var prods = [];
			res.forEach((seller) => (prods = prods.concat(seller.productArr)));
			return prods;
		},
		async sellerProductList(_, body, context) {
			const products = await Product.find().populate("seller");
			return products;
		},
		async getProduct(_, { id }, { user }) {
			const product = await Product.findById(id).populate("seller");
			return product;
		},
	},
	Mutation: {
		async createProduct(
			_,
			{
				data: {
					name,
					imageURL,
					price,
					quantity,
					description,
					technicalDefinition,
					categories,
				},
			},
			context
		) {
			const username = context.user;
			const user = await User.findOne({ username }).populate("profile.seller");
			const seller = user.profile.seller.populate("products");
			// const seller = await Seller.findOne({ username: user });
			// if (seller) {
			const product = new Product({
				name,
				imageURL,
				price,
				description,
				quantity,
				technicalDefinition,
				categories,
				seller: seller._id,
			});
			await product.save();

			await seller.products.push(product);
			await seller.save();
			return product;
			// } else throw new UserInputError("Request is not Authorized");
		},
		async updateProduct(
			_,
			{
				id,
				name,
				imageURL,
				price,
				description,
				quantity,
				technicalDefinition,
				categories,
			},
			{ user }
		) {
			const seller = await Seller.findOne({ username: user });
			if (seller) {
				const product = await Product.findByIdAndUpdate(id, {
					name,
					imageURL,
					price,
					technicalDefinition,
					categories,
					description,
					quantity,
					seller: seller._id,
				});
				await product.save();

				// await seller.products.push(product);
				// await seller.save();
				return product;
			} else throw new UserInputError("Request is not Authorized");
		},
		async deleteProduct(_, { id }, { user }) {
			const seller = await Seller.findOne({ username: user });
			if (seller) {
				await Product.findByIdAndDelete(id);
			} else throw new UserInputError("Request is not Authorized");
		},
	},
};
