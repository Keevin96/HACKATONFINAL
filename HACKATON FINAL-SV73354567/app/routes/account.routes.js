const { authJwt } = require("../middlewares");
const controller = require("../controllers/account.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/accounts", [authJwt.verifyToken], controller.getAllUsers);
  app.get("/api/accounts/:id", [authJwt.verifyToken], controller.getUserById);
  app.delete("/api/accounts/:id", [authJwt.verifyToken], controller.deleteUser);
};