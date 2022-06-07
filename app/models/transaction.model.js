const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        fromAdress: {
            type: String,
            required: true,
            ref: 'user',
        },

        toAdress: {
            type: String,
            required: true,
            ref: 'user',
        },

        amount: {
            type: Number,
            required: true,
        },
    },
    
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("transaction", transactionSchema);

