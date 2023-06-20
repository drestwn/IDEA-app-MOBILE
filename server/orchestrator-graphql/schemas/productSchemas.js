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
  # Komentar di dalam GraphQL diawali dengan tanda hashtag / kres (#).
  type Category{
    id: Int
    name: String
  }
  type Images{
  id:Int
  productId:Int
  imgUrl:String
  }
  # Ini adalah tipe data yang digunakan dalam GraphQL ini
  # Istilahnya adalah "Type Definition"
  type Product {
    id: ID!
    name: String
    slug: String
    description: String
    price: Int
    mainImg: String
    categoryId: Int
    authorId: Int
    Category: Category
    Images:[Images]
  }
  type ProductDeleteResult {
    statusCode: Int
    msg: String
  }
  type InputAddProduct {
    statusCode: Int
    msg:String
  }
  type updateProductById{
  statusCode:Int
  msg:String
}

  # type "Query" ini bersifat spesial:
  # - Melisting seluruh Query yang bisa digunakan oleh client
  # - Memberitahukan kembalian data yang digunakan untuk tiap Query yang ada
  type Query {
    # Pada query di bawah ini dinyatakan bahwa:
    # - GraphQL akan memiliki sebuah query dengan nama "products"
    # - Kembaliannya berupa array of type products yang didefinisikan di type Product di atas
    products: [Product]
    productDetail(id: Int!):Product
    
  }
  type Mutation {
    # Karena di sini tipe kembaliannya berupa statusCode dan message
    # Maka dibentuk dalam sebuah type yang baru bernama
    # ColorDeleteResult
    deleteProduct(id: Int!): ProductDeleteResult
    updateProduct(id: Int!, name:String!, slug:String!,description:String!,price:Int!,mainImg:String!,categoryId:Int!,authorId:Int!): updateProductById
    addProduct(name:String!, slug:String!,description:String!,price:Int!,mainImg:String!,categoryId:Int!,authorId:Int!,imgUrl:String!): InputAddProduct
  }
`;
const resolvers = {
  Query: {
    // Di sini Query products akan mengembalikan dummy data products yang didefine di atas
    //read
    products: async () => {
      redis.del("productList");
      console.log("kepanggil");
      let productList = await redis.get("productList");

      if (productList) {
        let response = JSON.parse(productList);
        console.log("pakeCache");
        return response;
      }

      const response = await axios.get(`${BASE_URL_APP}/product`);
      redis.set("productList", JSON.stringify(response.data));
      return response.data;
    },
    //read detail by id
    productDetail: async (_, { id }) => {
      const response = await axios.get(`${BASE_URL_APP}/product-detail/${id}`);
      return response.data.response;
    },
  },
  Mutation: {
    //delete by Id
    deleteProduct: async (_, { id }) => {
      const response = await axios.delete(`${BASE_URL_APP}/product/${id}`);
      redis.del("productList");
      return response.data;
    },
    //update by id
    updateProduct: async (
      _,
      { id, name, slug, description, price, mainImg, categoryId, authorId }
    ) => {
      const response = await axios.patch(`${BASE_URL_APP}/product/${id}`, {
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId,
        authorId,
      });
      redis.del("productList");

      return response.data;
    },

    //add Product
    addProduct: async (
      _,
      { name, slug, description, price, mainImg, categoryId, authorId, imgUrl }
    ) => {
      const response = await axios.post(`${BASE_URL_APP}/create-product`, {
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId,
        authorId,
        imgUrl,
      });
      redis.del("productList");

      return response.data;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
