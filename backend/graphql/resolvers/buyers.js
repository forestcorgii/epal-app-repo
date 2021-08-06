const Buyer = require("../../model/Buyer");
const User = require("../../model/User");
const { UserInputError } = require("apollo-server-lambda");
module.exports = {
	Query: {
		async getBuyerInfo(_, {}, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
				const buyer = await Buyer.findOne({ username: context.user }).populate(
					"orders"
				);
				return buyer;
		},
	},
	Mutation: {
		async createBuyerInfo(_, { data: { address, location } }, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}

			const user = await User.findOne({ username: context.user }).populate('profile.buyer');
			if (user && !user.profile.buyer) {
				const buyer = new Buyer({
					user: user._id,
					address,
					location,
				});
				await buyer.save();

				user.profile.buyer = buyer
				await user.save()
				
				return buyer;
			} else {
				throw new UserInputError("You already have a Buyer Profile");
			}
		},
		async updateBuyerInfo(_, { id, data: { address, location } }, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}			
			const buyer = await Buyer.findByIdAndUpdate(id, {
				address,
				location,
			});
			await buyer.save();
			return buyer;
		},
	},
};
