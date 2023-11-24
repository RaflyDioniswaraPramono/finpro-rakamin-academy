const router = require("express").Router();
const DistributorReportController = require("../controllers/distributorReportController");

router.post("/distributors/reports", DistributorReportController.addSupplierReport);
router.get("/distributors/reports", DistributorReportController.getSupplierReports);
router.get("/distributors/reports/:id", DistributorReportController.getSupplierReportById);
router.put("/distributors/reports", DistributorReportController.updateSupplierReport);
router.delete("/distributors/reports/:id", DistributorReportController.deleteSupplierReport);

module.exports = router;