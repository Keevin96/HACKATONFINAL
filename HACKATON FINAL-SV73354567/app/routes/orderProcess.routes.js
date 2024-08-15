const { authJwt } = require("../middlewares");
const controller = require("../controllers/orderProcessController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/order", [authJwt.verifyToken], controller.createOrder);
  app.get("/api/orders", [authJwt.verifyToken], controller.getAllOrders);
  app.get("/api/orders/:id", [authJwt.verifyToken], controller.getOrderById);
};