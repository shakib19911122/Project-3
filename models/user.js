const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        required: true,
        type: [
            sender,
            driver
        ]
    }


    
});

const User = mongoose.model("User", UserSchema);

module.exports = User;