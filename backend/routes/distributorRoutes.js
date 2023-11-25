const router = require("express").Router();
const distributorController = require("../controllers/distributorController");

router.post("/distributors", distributorController.addDistributor);
router.get("/distributors", distributorController.getDistributor);
router.get("/distributors/:id", distributorController.getDistributorById);
router.put("/distributors", distributorController.updateDistributor);
router.delete("/distributors/:id", distributorController.deleteDistributor);

module.exports = router