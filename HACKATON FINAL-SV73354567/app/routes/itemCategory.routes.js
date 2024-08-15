const { authJwt } = require("../middlewares");
const controller = require("../controllers/itemCategory.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/categories", [authJwt.verifyToken], controller.getAllCategories);
  app.post("/api/categories", [authJwt.verifyToken], controller.createCategory);
  app.delete("/api/categories/:id", [authJwt.verifyToken], controller.deleteCategory);
};
