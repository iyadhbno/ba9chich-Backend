const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
          
          },

        prenom: {
            type: String,
           
        },

        email: {
            type: String,
          
          },
          
        password: {
            type: String,
          
          },
        
        phone: String,

        balance: {
            type: String,
           
          }, 

        imageUrl: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);