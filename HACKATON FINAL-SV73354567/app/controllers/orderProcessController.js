const db = require("../models");
const PurchaseOrder = db.purchaseOrder;

exports.createOrder = (req, res) => {
  const order = new PurchaseOrder({
    items: req.body.items,
    total: req.body.total,
    user: req.body.user,
    status: "pending"
  });

  order.save((err, order) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Order was created successfully!" });
  });
};

exports.getAllOrders = (req, res) => {
  PurchaseOrder.find()
    .populate("items.product", "-__v")
    .populate("user", "-__v")
    .exec((err, orders) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send(orders);
    });
};

exports.getOrderById = (req, res) => {
  PurchaseOrder.findById(req.params.id)
    .populate("items.product", "-__v")
    .populate("user", "-__v")
    .exec((err, order) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send(order);
    });
};