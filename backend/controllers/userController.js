const { tb_admins } = require("../models");
const { decryptPassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt");

class UsersController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await tb_admins.findOne({
        where: { email },
      });
      if (user) {
        if (decryptPassword(password, user.password)) {
          const access_token = generateToken(user);
          res.status(200).json({ token: access_token });
        } else {
          res.status(409).json({
            msg: "Incorrect password!",
          });
        }
      } else {
        res.status(404).json({
          msg: "User not found!",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = UsersController
