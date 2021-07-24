const { gql } = require("apollo-server-lambda");

module.exports = gql`
	type Buyer {
		id: ID!
		createdAt: String
		username: String!

		address: String!
		location: [Float!]!

		orders: [Order!]!
	}
	input BuyerInput {
		username: String!
		address: String!
		location: [Float]!
		store: StoreInput
	}
	extend type Query {
		getBuyerInfo: Buyer
	}
	extend type Mutation {
		createBuyerInfo(data: BuyerInput): Buyer
		updateBuyerInfo(id: ID!, data: BuyerInput): Buyer
	}
`;
