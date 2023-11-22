const router = require("express").Router();
const SupplierReportController = require("../controllers/supplierReportController");

router.post("/suppliers/reports", SupplierReportController.addSupplierReport);
router.get("/suppliers/reports", SupplierReportController.getSupplierReports);
router.get("/suppliers/reports/:id", SupplierReportController.getSupplierReportById);
router.put("/suppliers/reports", SupplierReportController.updateSupplierReport);
router.delete("/suppliers/reports", SupplierReportController.deleteSupplierReport);

module.exports = router;