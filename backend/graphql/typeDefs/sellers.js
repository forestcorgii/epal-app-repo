const { gql } = require("apollo-server");

module.exports = gql`
	type Store {
		storename: String
		description: String
		address: String
		location: [Float!]
		products: [Product!]
		orders: [Order!]
	}
	type Seller {
		id: ID!
		username: String!
		store: Store
		createdAt: String
	}

	input StoreInput {
		storename: String
		description: String
		address: String
		location: [Float!]
	}
	input SellerInput {
		username: String!
		store: StoreInput
	}
	extend type Query {
		getSellerInfo: Seller
	}
	extend type Mutation {
		createSellerInfo(data: SellerInput): Seller
		updateSellerInfo(id: ID!, data: SellerInput): Seller
	}
`;
