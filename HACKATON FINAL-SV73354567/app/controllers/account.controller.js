const db = require("../models");
const Account = db.account;

exports.getAllUsers = (req, res) => {
  Account.find()
    .populate("roles", "-__v")
    .exec((err, users) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send(users);
    });
};

exports.getUserById = (req, res) => {
  Account.findById(req.params.id)
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send(user);
    });
};

exports.deleteUser = (req, res) => {
  Account.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(200).send({ message: "User was deleted successfully!" });
  });
};