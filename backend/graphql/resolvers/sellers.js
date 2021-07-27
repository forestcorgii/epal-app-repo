const Seller = require("../../model/Seller");
const User = require("../../model/User");
const { UserInputError } = require("apollo-server-lambda");
module.exports = {
	Query: {
		async getSellerPrivateInfo(_, {}, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}

			const seller = await Seller.findOne({ username: context.user })
				.populate("store.products")
				.populate("store.orders");
			return seller;
		},
		async getSellerPublicInfo(_, {id}, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}

			const seller = await Seller.findById(id)
				.populate("store.products")
				// .populate("store.orders");
			return seller;
		},
	},
	Mutation: {
		async createSellerInfo(
			_,
			{ data: { storename, description, address, location } },
			context
		) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
			const user = await User.findOne({ username: context.user }).populate('profile.seller');
			if (!user && !user.profile.seller) {
				const newUser = new Seller({
					user: user._id,
					storename,
					description,
					address,
					location,
				});
				newUser.save();
				return newUser;
			} else {
				throw new UserInputError("You already have Seller Profile");
			}
		},
		async updateSellerInfo(
			_,
			{ id, data: { storename, description, address, location } },
			context
		) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
			const seller = await Seller.findByIdAndUpdate(id, {
				storename,
				description,
				address,
				location,
			});
			await seller.save();
			return seller;
		},
	},
};
