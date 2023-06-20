//nama controller camelCase
const { getDatabase } = require("../config/config");
const { ObjectId } = require("mongodb");
const User = require("../models/user");

module.exports = {
  findAllUsers: async (req, res, next) => {
    try {
      const data = await User.findAll();
      res.status(200).json({
        statusCode: 200,
        message: "Data is ready",
        data,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const { email, username, password, role, phoneNumber, address } =
        req.body;
      const newUser = await User.createUser({
        email,
        username,
        password,
        role,
        phoneNumber,
        address,
      });

      res.status(201).json({
        statusCode: 201,
        id: newUser.insertedId,
        email,
        username,
      });
    } catch (err) {
      console.log(err);
    }
  },
  findUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const foundUser = await User.findById(id);
      res.status(200).json({
        statusCode: 200,
        data: foundUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteUserbyId: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteUser = await User.destroyById(id);
      res.status(200).json({
        statusCode: 200,
        data: deleteUser,
        msg: `user by id ${id} has been deleted`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
