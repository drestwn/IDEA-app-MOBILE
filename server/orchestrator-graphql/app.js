if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const {
  typeDefs: productTypeDefs,
  resolvers: productResolvers,
} = require("./schemas/productSchemas");

const {
  typeDefs: userTypeDefs,
  resolvers: userResolvers,
} = require("./schemas/userSchemas");

const {
  typeDefs: categorTypeDefs,
  resolvers: categoryResolvers,
} = require("./schemas/categorySchemas");

(async () => {
  // Define Server
  const server = new ApolloServer({
    // Jadi typeDefs di sini bisa menerima array
    typeDefs: [productTypeDefs, userTypeDefs, categorTypeDefs],
    // sama seperti typeDefs, resolvers juga bisa menerima array
    resolvers: [productResolvers, userResolvers, categoryResolvers],
    // Ini supaya kita tetap bisa membuka explorer sekalipun di production
    introspection: true,
    // (in real case yang digunakan adalah sebagai berikut)
    // introspection: process.env.NODE_ENV !== 'production'
  });

  // Start Server
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 || process.env.PORT },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
