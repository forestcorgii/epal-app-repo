const { ApolloServer } = require("apollo-server");
// const gql = require('graphql')
require("dotenv").config();

// console.log(process.env.MONGODB_URI);
// console.log(env.PORT);
const resolvers = require("./graphql/resolvers/index");
const typeDefs = require("./graphql/typeDefs");

const verify = require("./router/verifyToken");
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		user = "";
		// user = "7798f9ab-406d-4cad-94a7-8ef8da977331";
		user = verify(req);
		// if (user == "") { throw new Error('Request not authorized')	}
		return { user };
	},
});

const mongoose = require("mongoose");
mongoose
	.connect(process.env.MONGODB_ATLAS_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected to mongoose.");
		return server.listen({ port: 3001 });
	})
	.then(() => {
		console.log(`Server listening in port ${3001}`);
	});
