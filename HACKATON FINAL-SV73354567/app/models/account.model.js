const mongoose = require("mongoose");

const Account = mongoose.model(
  "Account",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserRole"
      }
    ]
  })
);

module.exports = Account;