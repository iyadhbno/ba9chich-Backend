const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            maxlength: 50,
          },

        prenom: {
            type: String,
            maxlength: 50,
        },

        email: {
            type: String,
            match: /^\S+@\S+\.\S+$/,  
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
          },
          
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 128,
          },
        
        phone: String,

        balance: {
            type: Number,
            min: 0,
            default: 0
          }, 

        imageUrl: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);