require("dotenv").config();
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const resolvers = require("./graphql/resolvers/index");
const typeDefs = require("./graphql/typeDefs/index");
const express = require("express");
const s3UploadRoute = require("./router/s3Upload");

const verify = require("./router/verifyToken");
async function startApolloServer() {
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
	await server.start();

	const app = express();
	app.use(cors());
	app.use("/s3/signin", s3UploadRoute);
	server.applyMiddleware({ app });

	const mongoose = require("mongoose");
	mongoose
		.connect(process.env.MONGODB_ATLAS_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("connected to mongoose.");
			// return server.listen({ port: 3001 });
		});
	// .then(() => {
	// 	console.log(`Server listening in port 3001`);
	// });

	await new Promise((resolve) => app.listen({ port: 3001 }, resolve));
	console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
	return { server, app };
}

startApolloServer();
