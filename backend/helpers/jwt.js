const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const generateToken = (users) => {
  const { nama, email, profil, phone_number, password } = users;

  return jwt.sign(
    {      
      nama: nama,
      email: email,
      profil: profil,
      phone_number: phone_number,
      password: password
    },
    secretKey
  );
};

const tokenVerifier = (access_token) => {
  return jwt.verify(access_token, secretKey);
};

module.exports = {
  generateToken,
  tokenVerifier,
};
