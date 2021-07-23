const buyerResolvers = require("./buyers");
const sellerResolvers = require("./sellers");
const productResolvers = require("./products");
const orderResolvers = require("./orders");

module.exports = {
	Query: {
		...buyerResolvers.Query,
		...sellerResolvers.Query,
		...productResolvers.Query,
		...orderResolvers.Query,
	},
	Mutation: {
		...buyerResolvers.Mutation,
		...sellerResolvers.Mutation,
		...productResolvers.Mutation,
		...orderResolvers.Mutation,
	},
};
