import React from "react";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001",
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
