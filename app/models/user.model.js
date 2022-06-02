const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nom: String,
        prenom: String,
        email: String,
        password: String,
        phone: String,
        imageUrl: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);