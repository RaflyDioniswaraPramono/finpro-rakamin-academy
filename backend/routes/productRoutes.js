const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.post("/products", ProductController.addProduct);
router.get("/products", ProductController.getProducts);
router.get("/products/:id", ProductController.getProductById);
router.put("/products", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);

module.exports = router;