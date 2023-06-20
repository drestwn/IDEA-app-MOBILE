if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const axios = require("axios");
const Redis = require("ioredis");
const BASE_URL_APP = process.env.BASE_URL_APP;
const redis = new Redis(
  process.env.BASE_PORT_REDIS,
  process.env.BASE_URL_REDIS
);

const typeDefs = `#graphql
    type Categories{
     id:Int,
     name:String
    }
   type Query{
     categories:[Categories] 
   }
`;

const resolvers = {
  Query: {
    categories: async () => {
      const response = await axios.get(`${BASE_URL_APP}/category`);

      return response.data.response;
    },
  },
};

module.exports = { typeDefs, resolvers };
