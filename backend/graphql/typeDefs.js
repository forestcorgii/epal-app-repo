const { gql } = require("apollo-server");

module.exports = gql`
	type Seller {
		id: ID!
		username: String!
		storename:String!
		address:String!
		location:[Float!]!

		products: [Product!]!
		orders: [Order!]!
		
		createdAt: String
	}
	type Buyer {
		id: ID!
		createdAt: String
		username: String!
		
		address:String!
		location:[Float!]!

		orders: [Order!]!
	}
	type Product {
		id: ID!
		name: String!
		price: Float!
		description: String!
		quantity: Int!
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

	type Query {
		getSellerInfo:Seller
		getBuyerInfo:Buyer
		# getUsers: User
		getProducts: [Product]
		getProduct(id:ID!): Product

		getOrders:[Order]
		getOrder(id:ID!):Order
	}
	type Mutation {
		registerSeller(username:String!,address:String!,location:[Float]!,storename:String!): Seller 
		registerBuyer(username:String!,address:String!,location:[Float]!): Buyer 

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

		createOrder(
			buyerid:ID!
			sellerid:ID!
			productids:[ID!]!
		):Order
		cancelOrder(id:ID!):String
		finishOrder(id:ID!):String
	}	
`;
