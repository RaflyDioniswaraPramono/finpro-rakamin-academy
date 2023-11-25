const router = require("express").Router();
const UsersController = require("../controllers/userController");

router.post("/admins/register", UsersController.register);
router.post("/admins/login", UsersController.login);

module.exports = router;