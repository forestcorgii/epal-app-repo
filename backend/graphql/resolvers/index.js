const buyerResolvers = require("./buyers");
const sellerResolvers = require("./sellers");
const productResolvers = require("./products");
const orderResolvers = require("./orders");
const userResolvers = require('./users')

module.exports = {
	Query: {
		...buyerResolvers.Query,
		...sellerResolvers.Query,
		...productResolvers.Query,
		...orderResolvers.Query,
		...userResolvers.Query
	},
	Mutation: {
		...buyerResolvers.Mutation,
		...sellerResolvers.Mutation,
		...productResolvers.Mutation,
		...orderResolvers.Mutation,
		...userResolvers.Mutation,
	},
};
