const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
}

const decryptPassword = (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
}

module.exports = {
  encryptPassword,
  decryptPassword
}