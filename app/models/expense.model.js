const mongoose = require("mongoose");


const expenseSchema = mongoose.Schema(
  {
    item: String,
    price: Number,

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("expense", expenseSchema);
