const { gql } = require("apollo-server");

module.exports = gql`
	input TechnicalInformationInput {
		size: [Int]
		color: String
	}
	input ProductInput {
		name: String!
		price: Float!
		description: String!
		technicalInformation: TechnicalInformationInput
		categories: [String]
	}
	type TechnicalInformation {
		size: [Int]
		color: String
	}
	type Product {
		id: ID!
		name: String!
		price: Float!
		description: String!
		technicalInformation: TechnicalInformation
		categories: [String]
		createdAt: String
		seller: Seller!
	}
	extend type Query {
		getProducts: [Product]
		getProduct(id: ID!): Product
	}
	extend type Mutation {
		deleteProduct(id: ID!): String
		createProduct(data: ProductInput): Product
		updateProduct(id: ID!, data: ProductInput): Product
	}
`;
