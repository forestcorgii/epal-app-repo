const { ApolloServer } = require("apollo-server-lambda");

const resolvers = require("./graphql/resolvers/index");
const typeDefs = require("./graphql/typeDefs");

const verify = require("./router/verifyToken");
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ express }) => {
		user = "";
		// user = "7798f9ab-406d-4cad-94a7-8ef8da977331";
		user = verify(express.req);
		// if (user == "") { throw new Error('Request not authorized')	}
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
// .then(() => {
// 	console.log("connected to mongoose.");
// 	return server.listen({ port: process.env.PORT });
// })
// .then(() => {
// 	console.log(`Server listening in port ${process.env.PORT}`);
// });
exports.graphqlHandler = server.createHandler({
	cors: {
		origin: true,
		credentials: true,
	},
});