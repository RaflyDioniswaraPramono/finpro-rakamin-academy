const router = require("express").Router();
const ProductsController = require("../controllers/productController");
const auth = require("../middlewares/auth");

router.post("/products", auth, ProductsController.addProduct);
router.get("/products", auth, ProductsController.getProducts);
router.get("/products/:id", auth, ProductsController.getProductById);
router.put("/products", auth, ProductsController.updateProduct);
router.delete("/products/:id", auth, ProductsController.deleteProduct);

module.exports = router;