import React from "react";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	// uri: "http://localhost:3000/graphql",
	// uri: "http://localhost:3001/graphql",
	uri: `${process.env.REACT_APP_BACKEND_BASE_URL}/graphql`,
	cache: new InMemoryCache(),
	headers: {
		authorization: localStorage.getItem("merkado-token") || "",
	},
});

export default function ApolloServer() {
	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	);
}
