const router = require("express").Router();
const SupplierController = require("../controllers/supplierController");
const auth = require("../middlewares/auth");

router.post("/suppliers", auth, SupplierController.addSupplier);
router.get("/suppliers", auth, SupplierController.getSuppliers);
router.get("/suppliers/:id", auth, SupplierController.getSupplierById);
router.put("/suppliers", auth, SupplierController.updateSupplier);
router.delete("/suppliers/:id", auth, SupplierController.deleteSupplier);

module.exports = router;