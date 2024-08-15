const { authJwt } = require("../middlewares");
const controller = require("../controllers/coupon.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/coupons", [authJwt.verifyToken], controller.createCoupon);
  app.get("/api/coupons", [authJwt.verifyToken], controller.getAllCoupons);
  app.delete("/api/coupons/:id", [authJwt.verifyToken], controller.deleteCoupon);
};