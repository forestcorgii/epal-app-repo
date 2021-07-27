const { gql } = require("apollo-server-lambda");

module.exports = gql`
	type Buyer {
		id: ID!
		user:User!
		
		address: String!
		location: [Float!]!

		orders: [Order!]!

		createdAt: String
	}
	input BuyerInput {
		address: String!
		location: [Float]!
	}
	extend type Query {
		getBuyerInfo: Buyer
	}
	extend type Mutation {
		createBuyerInfo(data: BuyerInput): Buyer
		updateBuyerInfo(id: ID!, data: BuyerInput): Buyer
	}
`;
