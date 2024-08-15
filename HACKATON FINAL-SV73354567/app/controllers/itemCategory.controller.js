const db = require("../models");
const ItemCategory = db.itemCategory;

exports.getAllCategories = (req, res) => {
  ItemCategory.find()
    .exec((err, categories) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send(categories);
    });
};

exports.createCategory = (req, res) => {
  const category = new ItemCategory({
    name: req.body.name,
    description: req.body.description
  });

  category.save((err, category) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Category was created successfully!" });
  });
};

exports.deleteCategory = (req, res) => {
  ItemCategory.findByIdAndRemove(req.params.id, (err, category) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(200).send({ message: "Category was deleted successfully!" });
  });
};