const router = require("express").Router();
const DistributorReportController = require("../controllers/distributorReportController");

router.post("/distributors/reports", DistributorReportController.addDistributorReport);
router.get("/distributors/reports", DistributorReportController.getDistributorReports);
router.get("/distributors/reports/:id", DistributorReportController.getDistributorReportById);
router.put("/distributors/reports", DistributorReportController.updateDistributorReport);
router.delete("/distributors/reports/:id", DistributorReportController.deleteDistributorReport);

module.exports = router;