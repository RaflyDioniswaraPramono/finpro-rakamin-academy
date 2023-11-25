const router = require("express").Router();
const SupplierController = require("../controllers/supplierController");

router.post("/suppliers", SupplierController.addSupplier);
router.get("/suppliers", SupplierController.getSuppliers);
router.get("/suppliers/:id", SupplierController.getSupplierById);
router.put("/suppliers", SupplierController.updateSupplier);
router.delete("/suppliers/:id", SupplierController.deleteSupplier);

module.exports = router;