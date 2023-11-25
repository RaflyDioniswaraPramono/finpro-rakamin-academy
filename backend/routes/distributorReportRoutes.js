const router = require("express").Router();
const DistributorReportController = require("../controllers/distributorReportController");
const auth = require("../middlewares/auth");

router.post("/distributors/reports", auth, DistributorReportController.addDistributorReport);
router.get("/distributors/reports", auth, DistributorReportController.getDistributorReports);
router.get("/distributors/reports/:id", auth, DistributorReportController.getDistributorReportById);
router.put("/distributors/reports", auth, DistributorReportController.updateDistributorReport);
router.delete("/distributors/reports/:id", auth, DistributorReportController.deleteDistributorReport);

module.exports = router;