const express = require("express");
const Controller = require("../controllers/controllerApp");
const router = express.Router();

router.post("/create-product", Controller.createProduct);
router.get("/product", Controller.readProduct);
router.patch("/product/:id", Controller.updateProduct);
router.delete("/product/:id", Controller.deleteProduct);
module.exports = router;
