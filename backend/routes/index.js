const router = require("express").Router();
const distributorRoutes = require("./distributorRoutes");

router.get("/", (req, res) => {
    res.status(200).json({
      message: "Api is working!",
    });
  });

router.use("/api/v1", distributorRoutes)

module.exports = router;