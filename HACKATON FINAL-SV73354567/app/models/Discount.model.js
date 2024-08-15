const mongoose = require("mongoose");

const Discount = mongoose.model(
  "Discount",
  new mongoose.Schema({
    code: String,
    discount: Number
  })
);

module.exports = Discount;