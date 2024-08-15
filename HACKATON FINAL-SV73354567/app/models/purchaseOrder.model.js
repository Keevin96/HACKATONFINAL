const mongoose = require("mongoose");

const PurchaseOrder = mongoose.model(
  "PurchaseOrder",
  new mongoose.Schema({
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "InventoryItem"
        },
        quantity: Number
      }
    ],
    total: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account"
    },
    status: String
  })
);

module.exports = PurchaseOrder;