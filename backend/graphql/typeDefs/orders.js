const { gql } = require("apollo-server-lambda");

module.exports = gql`
	type Order {
		id: ID!
		seller: Seller!
		buyer: Buyer!
		product: Product!
		quantity: Int
		cancelledAt: String
		paidAt: String
	}

	extend type Query {
		getOrders: [Order]
		getOrder(id: ID!): Order
	}
	extend type Mutation {
		createOrder(
			buyerid: ID!
			sellerid: ID!
			productid: ID!
			quantity: Int
		): Order
		cancelOrder(id: ID!): String
		finishOrder(id: ID!): String
	}
`;
