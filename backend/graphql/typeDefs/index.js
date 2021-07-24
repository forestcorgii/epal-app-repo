const { gql } = require("apollo-server-lambda");
const BuyerType = require('./buyers')
const SellerType = require('./sellers')
const ProductType = require('./products')
const OrderType = require('./orders')

module.exports = [
	gql`
		type Query
		type Mutation
	`,
	BuyerType,
	SellerType,
	ProductType,
	OrderType,
];
