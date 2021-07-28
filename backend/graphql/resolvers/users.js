const User = require("../../model/User");
const Seller = require("../../model/Seller");
const Buyer = require("../../model/Buyer");
const { UserInputError, AuthenticationError } = require("apollo-server-lambda");
module.exports = {
	Query: {
		async getUser(_, {}, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
			try {
				const user = await User.findOne({ username: context.user })
					.populate("profile.buyer")
					.populate("profile.seller");
				return user;
			} catch (err) {
				throw new Error(err);
			}
		},
	},

	Mutation: {
		async createUser(_, {}, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
			const username = context.user;
			const user = await User.findOne({ username });
			if (!user) {
				const newUser = new User({ username });
				await newUser.save();
				return newUser;
			} else {
				throw new UserInputError("Username already exists");
			}
		},
		async deleteUser(_, { id }, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
			const user = await User.findById(id)
				.populate("profile.buyer")
				.populate("profile.seller");

			await Seller.findByIdAndDelete(user.seller._id);
			await Buyer.findByIdAndDelete(user.buyer._id);
			await User.findByIdAndDelete(user._id);

			return "User Deleted Successfully";
		},
	},
};
