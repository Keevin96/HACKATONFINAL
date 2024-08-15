const { authJwt } = require("../middlewares");
const controller = require("../controllers/inventoryItem.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/items", [authJwt.verifyToken], controller.getAllItems);
  app.post("/api/items", [authJwt.verifyToken], controller.createItem);
  app.delete("/api/items/:id", [authJwt.verifyToken], controller.deleteItem);
};