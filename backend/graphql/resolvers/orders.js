const Seller = require("../../model/Seller");
const Buyer = require("../../model/Buyer");
const Product = require("../../model/Product");
const Order = require("../../model/Order");

const { UserInputError } = require("apollo-server-lambda");

module.exports = {
	Query: {
		async getOrders(_, {}, { user }) {
			const orders = await Order.find();
			return orders;
		},
		async getOrder(_, { id }, { user }) {
			const order =  Order.findById(id).populate('buyer').populate('seller');
			return order;
		},
	},
	Mutation: {
		async createOrder(_, { buyerid, sellerid, productids }, { user }) {
			const buyer =  Buyer.findById(buyerid);
			const seller =  Seller.findById(sellerid);

			const order = new Order({
				buyerid,
				sellerid,
			});

			productids.map((productid) => {
				const product =  Product.findById(productid);
				order.products.push(product);
			});

			await order.save();
			await buyer.orders.push(order);
			await seller.orders.push(order);

			await buyer.save();
			await seller.save();
		},

		async cancelOrder(_, { id }, { user }) {
			await Order.findByIdAndUpdate(id, { cancelledAt: Date.now() });
		},
		async finishOrder(_, { id }, { user }) {
			await Order.findByIdAndUpdate(id, { paidAt: Date.now() });
		},
	},
};
