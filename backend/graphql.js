const { ApolloServer } = require("apollo-server-lambda");
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const resolvers = require("./graphql/resolvers/index");
const typeDefs = require("./graphql/typeDefs/index");

const verify = require("./router/verifyToken");
const server = new ApolloServer({
	typeDefs,
	resolvers,
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
});
