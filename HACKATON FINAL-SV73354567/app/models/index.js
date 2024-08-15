const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.account = require("./account.model");
db.userRole = require("./userRole.model");
db.itemCategory = require("./itemCategory.model");
db.inventoryItem = require("./inventoryItem.model");
db.purchaseOrder = require("./purchaseOrder.model");
db.coupon = require("./coupon.model");
db.paymentProcess = require("./paymentProcess.model");

db.ROLES = ["user", "admin"];

module.exports = db;