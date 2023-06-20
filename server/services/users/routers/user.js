const express = require("express");
const router = express.Router();

//namarouting kebab-case
const {
  findAllUsers,
  createUser,
  findUserById,
  deleteUserbyId,
} = require("../controllers/users");

router.get("/", findAllUsers);
router.get("/:id", findUserById);
router.post("/", createUser);
router.delete("/:id", deleteUserbyId);

module.exports = router;
