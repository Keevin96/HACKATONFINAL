const jwt = require("jsonwebtoken");
const config = require("../config/authorization.config.js");
const db = require("../models");
const Account = db.account;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const authenticationJwt = {
  verifyToken
};
module.exports = authenticationJwt;