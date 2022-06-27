const express = require("express");

const transaction = require("../controllers/transaction.controller.js");
const route = express.Router();

// Create a new Note
route.post("/createTransaction", transaction.create);



// Retrieve a single Note with noteId
route.get("/allTransactions", transaction.findAll);
route.delete("/deleteTransaction/:expenseId", transaction.delete);
module.exports = route;
