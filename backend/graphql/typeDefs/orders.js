const { gql } = require("apollo-server-lambda");

module.exports = gql`
	type Order {
		id: ID!
		seller: Seller!
		buyer: Buyer!
		products: [Product!]!
		cancelledAt: String
		successAt: String
	}

	extend type Query {
		getOrders: [Order]
		getOrder(id: ID!): Order
	}
	extend type Mutation {
		createOrder(buyerid: ID!, sellerid: ID!, productids: [ID!]!): Order
		cancelOrder(id: ID!): String
		finishOrder(id: ID!): String
	}
`;
