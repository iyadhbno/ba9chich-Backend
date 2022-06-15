const TransactionModel = require("../models/transaction.model");
const User = require("../models/user.model.js");

// Create and Save a new Note
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Transactions content can not be empty",
    });
  }

  const userFrom = await User.findOne({
    email: req.body.fromAdress,
  });
  const userTo = await User.findOne({ email: req.body.toAdress });

  if (!userFrom) {
    return res.status(404).send({
      message: "Email from adress not exist",
    });
  }

  if (!userTo) {
    return res.status(404).send({
      message: "Email to adress not exist",
    });
  }

  if (userFrom.balance < req.body.amount) {
    return res.status(404).send({
      message: "insufficient balance ",
    });
  } else {
    userFrom.balance = userFrom.balance - req.body.amount;
    userTo.balance = userTo.balance + req.body.amount;

    await userTo.update(userTo);
    await userFrom.update(userFrom);
  }

  // Create a Note
  let transaction = new TransactionModel({
    fromAdress: req.body.fromAdress,
    toAdress: req.body.toAdress,
    amount: req.body.amount,
  });

  transaction
    .save(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};
exports.findAll = (req, res) => {
  TransactionModel.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};
exports.getAllTransactions = async (req, res) => {
  const userEmail = req.params.userEmail;
  try {
    const expenses = await TransactionModel.find({
      $or: [{ toAdress: userEmail }, { fromAdress: userEmail }],
    });

    res.status(200).send(expenses);
  } catch (err) {
    res.status(400).send({ message: "Not Found" });
  }
};
