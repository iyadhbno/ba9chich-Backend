const router = require("express").Router();
const express = require("express");

const expense = require("../controllers/expense.controller.js");
const route = express.Router();

// Create a new Note
route.post("/createExpense", expense.create);

// Retrieve all Notes
route.get("/allExpenses", expense.findAll);

// Retrieve a single Note with noteId
route.get("/getAllExpenses/:userId", expense.getAllExpenses);

// Update a Note with noteId
route.put("/updateExpense/:expenseId", expense.update);

// Delete a Note with noteId
route.delete("/deleteExpense/:expenseId", expense.delete);
module.exports = route;
