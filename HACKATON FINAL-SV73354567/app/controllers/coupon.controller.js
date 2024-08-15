const db = require("../models");
const Coupon = db.coupon;

exports.createCoupon = (req, res) => {
  const coupon = new Coupon({
    code: req.body.code,
    discount: req.body.discount
  });

  coupon.save((err, coupon) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Coupon was created successfully!" });
  });
};

exports.getAllCoupons = (req, res) => {
  Coupon.find()
    .exec((err, coupons) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send(coupons);
    });
};

exports.deleteCoupon = (req, res) => {
  Coupon.findByIdAndRemove(req.params.id, (err, coupon) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(200).send({ message: "Coupon was deleted successfully!" });
  });
};