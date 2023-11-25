const router = require("express").Router();
const SupplierReportController = require("../controllers/supplierReportController");
const auth = require("../middlewares/auth");

router.post("/suppliers/reports", auth, SupplierReportController.addSupplierReport);
router.get("/suppliers/reports", auth, SupplierReportController.getSupplierReports);
router.get("/suppliers/reports/:id", auth, SupplierReportController.getSupplierReportById);
router.put("/suppliers/reports", auth, SupplierReportController.updateSupplierReport);
router.delete("/suppliers/reports/:id", auth, SupplierReportController.deleteSupplierReport);

module.exports = router;