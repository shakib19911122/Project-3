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
        type: [
            "sender",
            "driver"
        ]
    }
});

module.exports = mongoose.model("User", user)