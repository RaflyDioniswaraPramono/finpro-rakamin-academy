const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  const { access_token } = req.headers;

  if (!access_token) {
    return res.status(404).json({
      message: "Token not found"
    })
  } else {
    try {
      const decode = tokenVerifier(access_token);

      req.adminData = decode;
      next();
    } catch (error) {
      res.status(500).json({
        status_text: "Internal Server Error",
        message: "Token not found or token is expired, Relogin required!"
      });
    }
  }
}

module.exports = authentication;