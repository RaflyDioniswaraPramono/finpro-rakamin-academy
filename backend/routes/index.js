const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const supplierRoutes = require("./supplierRoutes");
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

router.use("/api/v1", adminRoutes);
router.use("/api/v1", productRoutes);
router.use("/api/v1", categoryRoutes);
router.use("/api/v1", supplierRoutes);
router.use("/api/v1", supplierReportRoutes);
router.use("/api/v1", distributorReportRoutes);

module.exports = router;
