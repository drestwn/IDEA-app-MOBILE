if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const axios = require("axios");
const Redis = require("ioredis");
const BASE_URL_USERS = process.env.BASE_URL_USERS;
const redis = new Redis(
  process.env.BASE_PORT_REDIS,
  process.env.BASE_URL_REDIS
);

const typeDefs = `#graphql
        type Users{
            username: String
            email: String
            password: String
            role: String
            phoneNumber: String
            address: String 
        }
        type InputAddUser{
           statusCode:Int
           email:String
        }

        type UsersDeleteResult{
          msg: String
        }

        type Query{
          userList: [Users]
          getUserById(id: String!): Users
         }
         
         type Mutation{
            addUser(username:String!,email:String!,password:String!,role:String!,phoneNumber:String!,address:String!): InputAddUser
             deleteUser(id: String!): UsersDeleteResult
         }
 `;

const resolvers = {
  Query: {
    //read
    userList: async () => {
      try {
        let userList = await redis.get("userlist");
        if (userList) {
          let response = JSON.parse(userList);
          return response;
        }
        const response = await axios.get(`${BASE_URL_USERS}/user`);
        redis.set("userlist", JSON.stringify(response.data.data));
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    //readonly
    getUserById: async (_, { id }) => {
      const response = await axios.get(`${BASE_URL_USERS}/user/${id}`);
      return response.data.data;
    },
  },
  Mutation: {
    addUser: async (
      _,
      { email, username, password, role, phoneNumber, address }
    ) => {
      const response = await axios.post(`${BASE_URL_USERS}/user`, {
        email,
        username,
        password,
        role,
        phoneNumber,
        address,
      });
      redis.del("userlist");
      console.log(response);
      console.log(response.data);
      return response.data;
    },
    deleteUser: async (_, { id }) => {
      const response = await axios.delete(`${BASE_URL_USERS}/user/${id}`);
      redis.del("userlist");
      return response.data;
    },
  },
};

module.exports = { typeDefs, resolvers };
