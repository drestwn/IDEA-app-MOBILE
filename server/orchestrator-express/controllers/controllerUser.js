const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis(
  11665,
  "redis://default:btVC3RtZ7OXzqqYgYlv2bHAzinBxT40N@redis-11665.c285.us-west-2-2.ec2.cloud.redislabs.com:11665"
);
const base_url_user = "http://localhost:4001" || process.env.BASE_URL_USER;
class Controller {
  static async readUser(req, res, next) {
    try {
      let userList = await redis.get("userlist:get");

      if (userList) {
        console.log("disini");
        let response = JSON.parse(userList);
        return res.status(200).json({
          statusCode: 200,
          response: response.data,
        });
      }

      const response = await axios.get(`${base_url_user}/user`);
      redis.set("userlist:get", JSON.stringify(response.data));

      res.status(200).json({
        statusCode: 200,
        response: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  static async readDetailUser(req, res, next) {
    try {
      const { id } = req.params;
      const response = await axios.get(`${base_url_user}/user/${id}`);

      res.status(200).json({
        statusCode: 200,
        response: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  static async addUser(req, res, next) {
    try {
      const { email, username, password, role, phoneNumber, address } =
        req.body;
      const data = { email, username, password, role, phoneNumber, address };
      const headers = { "Content-Type": "application/json" };
      const response = await axios.post(`${base_url_user}/user`, data, {
        headers,
      });
      res.status(200).json({
        statusCode: 200,
        response: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const data = await axios.delete(`${base_url_user}/user/${id}`);
      res.status(200).json({
        msg: `${id} has been deleted`,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller;
