const db = require("../models");
const InventoryItem = db.inventoryItem;

exports.getAllItems = (req, res) => {
  InventoryItem.find()
    .populate("category", "-__v")
    .exec((err, items) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send(items);
    });
};

exports.createItem = (req, res) => {
  const item = new InventoryItem({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  });

  item.save((err, item) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Item was created successfully!" });
  });
};

exports.deleteItem = (req, res) => {
  InventoryItem.findByIdAndRemove(req.params.id, (err, item) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(200).send({ message: "Item was deleted successfully!" });
  });
};