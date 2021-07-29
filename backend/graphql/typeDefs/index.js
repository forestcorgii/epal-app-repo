const { gql } = require("apollo-server-lambda");
const BuyerType = require('./buyers')
const SellerType = require('./sellers')
const ProductType = require('./products')
const OrderType = require('./orders')
const UserType = require('./users')
module.exports = [
	gql`
		type Query
		type Mutation
	`,
	UserType,
	BuyerType,
	SellerType,
	ProductType,
	OrderType,
];
