// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // Apollo Server Location
  // uri: "https://ch2phs3.drestwn.com",
  uri: "http://localhost:4000",

  // Auto caching from Apollo
  cache: new InMemoryCache(),
});

// export it
export default client;
