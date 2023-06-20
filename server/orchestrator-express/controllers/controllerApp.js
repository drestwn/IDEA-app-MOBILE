const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis(
  11665,
  "redis://default:btVC3RtZ7OXzqqYgYlv2bHAzinBxT40N@redis-11665.c285.us-west-2-2.ec2.cloud.redislabs.com:11665"
);
const base_url_user = "http://localhost:4002" || process.env.BASE_URL_USER;
class Controller {
  static async createProduct(req, res, next) {
    try {
      const {
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId,
        authorId,
        imgUrl,
      } = req.body;
      const data = {
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId,
        authorId,
        imgUrl,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        `${base_url_user}/create-product`,
        data,
        { headers }
      );
      res.status(200).json({
        statusCode: 200,
        data: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  static async readProduct(req, res, next) {
    try {
      let productList = await redis.get("productList:get");
      //   await redis.del("productList");
      if (productList) {
        let response = JSON.parse(productList);
        return res.status(200).json({
          statusCode: 200,
          msg: "?",
          response: response.data,
        });
      }

      const response = await axios.get(`${base_url_user}/product`);
      redis.set("productList:get", JSON.stringify(response.data));

      res.status(200).json({
        statusCode: 200,
        data: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, slug, description, price, mainImg, categoryId } = req.body;
      const headers = {
        "Content-Type": "application/json",
      };
      const data = { name, slug, description, price, mainImg, categoryId };
      const response = await axios.patch(
        `${base_url_user}/product/${id}`,
        data,
        { headers }
      );
      res.status(200).json({
        statusCode: 200,
        data: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const response = await axios.delete(`${base_url_user}/product/${id}`);
      res.status(200).json({
        statusCode: 200,
        data: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = Controller;
