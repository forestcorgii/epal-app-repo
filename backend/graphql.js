const { ApolloServer } = require("apollo-server-lambda");

const resolvers = require("./graphql/resolvers/index");
const typeDefs = require("./graphql/typeDefs");

const verify = require("./router/verifyToken");
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ express }) => {
		user = "";
		user = verify(express.req);
		return { user };
	},
	playground: {
		endpoint: "/dev/graphql",
	},
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