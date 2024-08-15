const mongoose = require("mongoose");

const InventoryItem = mongoose.model(
  "InventoryItem",
  new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ItemCategory"
    }
  })
);

module.exports = InventoryItem;