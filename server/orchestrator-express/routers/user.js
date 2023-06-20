const express = require("express");
const Controller = require("../controllers/controllerUser");
const router = express.Router();

router.get("/", Controller.readUser);
router.post("/", Controller.addUser);
router.get("/:id", Controller.readDetailUser);
router.delete("/:id", Controller.deleteUser);

module.exports = router;
