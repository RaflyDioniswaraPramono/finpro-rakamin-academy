const { tb_admins } = require("../models");
const { encryptPassword } = require("../helpers/bcrypt");
const { decryptPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UsersController {
  static async register(req, res) {
    try {
      const { email, phoneNumber, nama, profil, password } = req.body;
      const existingUser = await tb_admins.findOne({
        where: { email },
      });

      if (existingUser) {
        return res.status(409).json({
          message: "User already exists!",
        });
      } else {
        const hashedPassword = await encryptPassword(password);

        const admin = await tb_admins.create({
          email: email,
          phone_number: phoneNumber,
          nama: nama,
          profil: profil,
          password: hashedPassword
        })

        const access_token = generateToken(admin);

        res.status(201).json({
          status_code: "Created",          
          message: "Register successfully",
          access_token: access_token
        })
      }      
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

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
            message: "Incorrect password!",
          });
        }
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = UsersController;
