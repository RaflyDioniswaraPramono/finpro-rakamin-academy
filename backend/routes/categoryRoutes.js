const router = require("express").Router();
const CategoryController = require("../controllers/categoryController");

router.post("/categories", CategoryController.addCategory);
router.get("/categories", CategoryController.getCategories);
router.get("/categories/:id", CategoryController.getCategoryById);
router.put("/categories", CategoryController.updateCategory);
router.delete("/categories/:id", CategoryController.deleteCategory);

module.exports = router;