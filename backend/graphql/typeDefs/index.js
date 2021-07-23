const { gql } = require("apollo-server");

const TypeUser = gql`
	type Store {
		name: String
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
	type Buyer {
		id: ID!
		createdAt: String
		username: String!

		address: String!
		location: [Float!]!

		orders: [Order!]!
	}
	type Query {
		getSellerInfo: Seller
		getBuyerInfo: Buyer
	}
	type Mutation {
		registerSeller(data: RegisterInput): Seller
		registerBuyer(data: RegisterInput): Buyer
	}
`;

module.exports = [TypeUser,gql`
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
	type Order {
		id: ID!
		seller: Seller!
		buyer: Buyer!
		products: [Product!]!
		cancelledAt: String
		successAt: String
	}
	input RegisterInput {
		username: String!
		address: String!
		location: [Float]!
		storename: String
	}
	extend type Query {
		getProducts: [Product]
		getProduct(id: ID!): Product

		getOrders: [Order]
		getOrder(id: ID!): Order
	}
	extend type Mutation {
		deleteProduct(id: ID!): String
		updateProduct(
			id: ID!
			name: String!
			price: Float!
			quantity: Int!
			description: String!
		): Product
		createProduct(
			name: String!
			price: Float!
			quantity: Int!
			description: String!
		): Product

		createOrder(buyerid: ID!, sellerid: ID!, productids: [ID!]!): Order
		cancelOrder(id: ID!): String
		finishOrder(id: ID!): String
	}
`];
