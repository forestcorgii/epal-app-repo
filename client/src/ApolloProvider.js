import React from "react";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:3001",
  uri: "https://r1r6ml88e5.execute-api.us-east-1.amazonaws.com/dev/",
	cache: new InMemoryCache(),
	headers:{
	  authorization: localStorage.getItem('merkado-token') || ''
  }
});

export default function ApolloServer() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
