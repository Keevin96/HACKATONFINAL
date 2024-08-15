const db = require("../models");
const PaymentProcess = db.paymentProcess;

exports.createPayment = (req, res) => {
  const payment = new PaymentProcess({
    order: req.body.order,
    amount: req.body.amount,
    paymentMethod: req.body.paymentMethod,
    status: "completed"
  });

  payment.save((err, payment) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Payment was created successfully!" });
  });
};