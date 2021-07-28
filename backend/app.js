require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const resolvers = require("./graphql/resolvers/index");
const typeDefs = require("./graphql/typeDefs/index");

const verify = require("./router/verifyToken");
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		user = "";
		user = verify(req) || "7798f9ab-406d-4cad-94a7-8ef8da977333";

		return { user };
	},
	introspection: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
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
		console.log(`Server listening in port 3001`);
	});
