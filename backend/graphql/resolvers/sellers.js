const Seller = require("../../model/Seller");
const User = require("../../model/User");
const { UserInputError } = require("apollo-server-lambda");
module.exports = {
	Query: {
		async getSellerPrivateInfo(_, {}, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
			const username = context.user;
			const user = await User.findOne({ username }).populate("profile.seller");

			// const seller = await Seller.findOne({ username: context.user })
			const seller = await Seller.findById(user.profile.seller._id).populate(
				"products orders"
			);

			// console.log(seller);
			return seller;
		},
		async getSellerPublicInfo(_, { id }, context) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}

			const seller = await Seller.findById(id).populate("products");
			// console.log(seller);
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
			const user = await User.findOne({ username: context.user }).populate(
				"profile.seller"
			);
			if (user && !user.profile.seller) {
				const seller = new Seller({
					user: user._id,
					storename,
					description,
					address,
					location,
				});
				await seller.save();

				user.profile.seller = seller;
				await user.save();

				return seller;
			} else {
				throw new UserInputError("You already have Seller Profile");
			}
		},
		async updateSellerInfo(
			_,
			{ data: { storename, description, address, location } },
			context
		) {
			if (!context.user) {
				throw new AuthenticationError("Request is not Authorized");
			}
			const user = await User.findOne({ username: context.user })
			const seller = await Seller.findByIdAndUpdate(user.profile.seller, {
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
