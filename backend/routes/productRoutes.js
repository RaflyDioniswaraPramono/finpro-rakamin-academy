const router = require("express").Router();
const ProductsController = require("../controllers/productController");

router.post("/products", ProductsController.addProduct);
router.get("/products", ProductsController.getProducts);
router.get("/products/:id", ProductsController.getProductById);
router.put("/products", ProductsController.updateProduct);
router.delete("/products/:id", ProductsController.deleteProduct);

module.exports = router;