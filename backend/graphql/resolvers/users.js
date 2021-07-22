const Seller = require("../../model/Seller");
const Buyer = require("../../model/Buyer");
const { UserInputError } = require("apollo-server");
module.exports = {
	Query: {
		async getSellerInfo(_, body, context) {
			try {
				const seller = await Seller.findOne({ username: context.user })
					.populate("products")
					.populate("orders");
				return seller;
			} catch (err) {
				throw new Error(err);
			}
		},

		async getBuyerInfo(_, body, context) {
			try {
				const buyer = await Buyer.findOne({ username: context.user })
					.populate("orders");
				return buyer;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async registerSeller(
			_,
			{ username, address, location, storename },
			context
		) {
			const seller = await Seller.findOne({ username: username });
			if (!seller) {
				const newUser = new Seller({
					username,
					address,
					location,
					storename,
				});
				newUser.save();
				return newUser;
			} else {
				throw new UserInputError("Username already exists");
			}
		},
		async registerBuyer(_, { username, address, location }, context) {
			const buyer = await Buyer.findOne({ username: username });
			if (!buyer) {
				const newUser = new Buyer({
					username,
					address,
					location,
				});
				newUser.save();
				return newUser;
			} else {
				throw new UserInputError("Username already exists");
			}
		},
	},
};
