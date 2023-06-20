// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // Apollo Server Location
  uri: "https://ch2phs3.drestwn.com",
  // Auto caching from Apollo
  cache: new InMemoryCache(),
});

// export it
export default client;
