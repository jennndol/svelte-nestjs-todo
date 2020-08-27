import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: "http://backend/graphql",
});
// Cache implementation
const cache = new InMemoryCache();
// Create an Apollo client and pass it to all child components
// (uses svelte's built-in context)
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
export default apolloClient;
