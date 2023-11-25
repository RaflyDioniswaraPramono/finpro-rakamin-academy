const router = require("express").Router();
const CategoryController = require("../controllers/categoryController");
const auth = require("../middlewares/auth");

router.post("/categories", auth,CategoryController.addCategory);
router.get("/categories", auth, CategoryController.getCategories);
router.get("/categories/:id", auth, CategoryController.getCategoryById);
router.put("/categories", auth, CategoryController.updateCategory);
router.delete("/categories/:id", auth,CategoryController.deleteCategory);

module.exports = router;