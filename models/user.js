const mongoose = require("mongoose");
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
        type: String,
        enum: [
            "Sender",
            "Driver"
        ]
    }
});

module.exports = mongoose.model("User", user)