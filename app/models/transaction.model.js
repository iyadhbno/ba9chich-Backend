const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        fromAdress: {
            type: String,
        
           
        },

        toAdress: {
            type: String,
          
           
        },

        amount: {
            type: String,
         
        },
    },
    
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("transaction", transactionSchema);

