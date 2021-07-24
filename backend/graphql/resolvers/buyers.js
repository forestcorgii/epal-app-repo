const Buyer = require("../../model/Buyer");
const { UserInputError } = require("apollo-server-lambda");
module.exports = {
	Query: {
		async getBuyerInfo(_, body, context) {
			try {
				const buyer = await Buyer.findOne({ username: context.user }).populate(
					"orders"
				);
				return buyer;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async createBuyerInfo(
			_,
			{ data: { username, address, location } },
			context
		) {
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
		async updateBuyerInfo(
			_,
			{ id, data: { username, address, location } },
			context
		) {
			const buyer = await Buyer.findByIdAndUpdate(id, {
				username,
				address,
				location,
			});
			await buyer.save();
			return buyer;
		},
	},
};
