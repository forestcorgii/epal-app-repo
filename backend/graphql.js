const cors = require("cors");
const { ApolloServer } = require("apollo-server-lambda");
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const express = require("express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs, resolvers } = require("graphql-scalars");
const mainResolvers = require("./graphql/resolvers/index");
const mainTypeDefs = require("./graphql/typeDefs/index");
const s3UploadRoute = require("./router/s3Upload");
const verify = require("./router/verifyToken");


const server = new ApolloServer({
	schema: makeExecutableSchema({
		typeDefs: [...typeDefs, ...mainTypeDefs],
		resolvers: { ...resolvers, ...mainResolvers },
	}),
	context: ({ express }) => {
		user = "";
		user = verify(express.req);

		return { user };
	},
	introspection: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_ATLAS_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
exports.graphqlHandler = server.createHandler({
	cors: {
		origin: true,
		credentials: true,
	},
	expressAppFromMiddleware(middleware) {
		const app = express();
		app.use(cors());
		app.use("/s3/signin", s3UploadRoute);
		app.use(middleware);
		return app;
	},
});
