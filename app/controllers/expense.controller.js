const Expense = require("../models/expense.model.js");

// Create and Save a new Note
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Expense content can not be empty",
    });
  }

  // Create a Note
  let expense = new Expense({
    price: req.body.price,
    item: req.body.item,
    userId: req.body.userId,
  });

  expense
    .save(expense)
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

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Expense.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  User.findById(req.params.expenseId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.expenseId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.expenseId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id " + req.params.expenseId,
      });
    });
};

// Find a single note with a noteId

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.params.expenseId) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  // Find note and update it with the request body
  Expense.findByIdAndUpdate(
    req.params.expenseId,
    {
      price: req.body.price,
      item: req.body.item,
      userId: req.body.userId,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Expense not found with id " + req.params.expenseId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.expenseId,
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.expenseId,
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Expense.findByIdAndRemove(req.params.expenseId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.expenseId,
        });
      }
      res.send({ message: "Note deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.expenseId,
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.expenseId,
      });
    });
};

//send SMS

exports.getAllExpenses = async (req, res) => {
  const userId = req.params.userId;
  try {
    const expenses = await Expense.find({
      user: userId,
    });

    res.status(200).send(expenses);
  } catch (err) {
    res.status(400).send({ message: "Not Found" });
  }
};
