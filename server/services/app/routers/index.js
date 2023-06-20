const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();
const { loggedAuth } = require("../middlewares/routerMiddleware");
const dataErrors = require("../middlewares/errorHandler");

// router.post("/login/admin", Controller.LoginAdmin);
// router.post("/register/admin", Controller.RegisterAdmin);

router.get("/product", Controller.renderProduct);
router.get("/category", Controller.renderCategory);
router.get("/user", Controller.renderAdmin);

router.get("/client/product/:id", Controller.renderProductClient);

router.post("/create-product", Controller.createProduct);
router.post("/create-category", Controller.createCategory);

router.delete("/product/:id", Controller.deleteProductById);
router.delete("/category/:id", Controller.deleteCategoryById);

router.patch("/product/:id", Controller.updateProductById);
router.patch("/category/:id", Controller.updateCategoryById);

router.get("/product-detail/:id", Controller.renderDetailProduct);
router.get("/category-detail/:id", Controller.renderDetailCategory);

router.use(dataErrors);
module.exports = router;
