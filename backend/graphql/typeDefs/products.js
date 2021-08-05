const { gql } = require("apollo-server-lambda");

module.exports = gql`
	input TechnicalInformationInput {
		size: [Float]
		color: String
	}
	input ProductInput {
		name: String!
		imageURL: URL
		price: Float!
		description: String!
		quantity: Int
		technicalInformation: TechnicalInformationInput
		categories: [String]
	}
	type TechnicalInformation {
		size: [Int]
		color: String
	}
	type Product {
		_id: ObjectID!
		name: String!
		imageURL: URL
		price: Float!
		quantity: Int
		description: String!
		technicalInformation: TechnicalInformation
		categories: [String]
		createdAt: Timestamp
		seller: Seller
	}
	extend type Query {
		availableProductList(location: [Float!]!, maxDistance: Float!): [Product]
		sellerProductList: [Product]
		getProduct(id: ID!): Product
	}
	extend type Mutation {
		deleteProduct(id: ID!): String
		createProduct(data: ProductInput): Product
		updateProduct(id: ID!, data: ProductInput): Product
	}
`;
