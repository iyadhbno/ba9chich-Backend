const mongoose = require("mongoose");


const expenseSchema = mongoose.Schema(
  {
    item: String,
    price: String,

 userId:String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("expense", expenseSchema);
