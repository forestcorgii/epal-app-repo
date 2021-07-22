const usersResolvers = require("./users");
const productResolvers = require("./products");
const orderResolvers = require("./orders")

module.exports = {
	Query: {
		...usersResolvers.Query,
		...productResolvers.Query,
		...orderResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
		...productResolvers.Mutation,
		...orderResolvers.Mutation,
	},
};
