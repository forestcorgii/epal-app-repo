const Seller = require("../../model/Seller");
const { UserInputError } = require("apollo-server");
module.exports = {
	Query: {
		async getSellerInfo(_, body, context) {
			try {
				const seller = await Seller.findOne({ username: context.user })
					.populate("store.products")
					.populate("store.orders");
				return seller;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async createSellerInfo(
			_,
			{
				data: {
					username,
					store: { storename, description, address, location },
				},
			},
			context
		) {
			const seller = await Seller.findOne({ username: username });
			if (!seller) {
				const newUser = new Seller({
					username,
					store: {
						storename,
						description,
						address,
						location,
					},
				});
				newUser.save();
				return newUser;
			} else {
				throw new UserInputError("Username already exists");
			}
		},
		async updateSellerInfo(
			_,
			{
				id,
				data: {
					username,
					store: { storename, description, address, location },
				},
			},
			context
		) {
			const seller = await Seller.findByIdAndUpdate(id, {
				username,
				store: {
					storename,
					description,
					address,
					location,
				},
			});
			await seller.save();
			return seller;
		},
	},
};
