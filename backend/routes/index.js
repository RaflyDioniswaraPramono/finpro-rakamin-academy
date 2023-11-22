const router = require("express").Router();

const distributorReportRoutes = require("./distributorReportRoutes");
const supplierReportRoutes = require("./supplierReportRoutes");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Api is working!",
  });
});

router.get("/api/v1", (req, res) => {
  res.status(200).json({
    message: "Api is working!",
  });
});

router.use("/api/v1", supplierReportRoutes);

module.exports = router;
