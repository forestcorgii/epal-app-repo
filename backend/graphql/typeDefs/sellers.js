const { gql } = require("apollo-server-lambda");

module.exports = gql`
	type Seller {
		id: ID!
		user:User!
		
		storename: String
		description: String
		address: String
		location: [Float!]
		products: [Product!]
		orders: [Order!]

		createdAt: String
	}

	input SellerInput {
		storename: String
		description: String
		address: String
		location: [Float!]
	}

	extend type Query {
		getSellerPublicInfo: Seller
		getSellerPrivateInfo: Seller
	}
	extend type Mutation {
		createSellerInfo(data: SellerInput): Seller
		updateSellerInfo(data: SellerInput): Seller
	}
`;
