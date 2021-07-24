const Seller = require("../../model/Seller");
const Product = require("../../model/Product");
const { UserInputError } = require("apollo-server-lambda");

module.exports = {
	Query: {
		async getProducts(_, body, context) {
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
			{ data: { name, price, description, technicalDefinition,categories } },
			{ user }
		) {
			const seller = await Seller.findOne({ username: user });
			// if (seller) {
			const product = new Product({
				name,				
				price,
				description,
				technicalDefinition,
				categories,	
				seller: seller._id,
			});
			await product.save();

			await seller.store.products.push(product);
			await seller.save();
			return product;
			// } else throw new UserInputError("Request is not Authorized");
		},
		async updateProduct(
			_,
			{ id, name, price, description, quantity },
			{ user }
		) {
			const seller = await Seller.findOne({ username: user });
			if (seller) {
				const product = await Product.findByIdAndUpdate(id, {
					name: name,
					price: price,
					description: description,
					quantity: quantity,
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
