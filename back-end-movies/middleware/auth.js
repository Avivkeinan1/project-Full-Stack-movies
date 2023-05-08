const JWT = require("jsonwebtoken");
const { JWTSecretToken } = require("../configs/config");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(401).send("Access Denied. No Token Provided");
    return;
  }
  try {
    const payload = JWT.verify(token, JWTSecretToken);
    req.user = { id: payload._id, biz: payload.biz, admin: payload.admin };
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
