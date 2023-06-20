const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/config");
const { hashPassword } = require("../helper/encrypt");

class User {
  static getCollections() {
    const db = getDatabase();
    const users = db.collection("Users");
    return users;
  }

  static async findAll() {
    return this.getCollections().find().toArray();
  }

  static async createUser(user) {
    return this.getCollections().insertOne({
      email: user.email,
      username: user.username,
      password: user.password,
      role: user.role,
      phoneNumber: user.phoneNumber,
      address: user.address,
    });
  }

  static async findById(objectId) {
    return this.getCollections().findOne({
      _id: new ObjectId(objectId),
    });
  }

  static async destroyById(id) {
    return this.getCollections().deleteOne({
      _id: new ObjectId(id),
    });
  }
}

module.exports = User;
