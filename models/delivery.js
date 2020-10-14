const mongoose = require("mongoose");
const delivery = new mongoose.Schema({

    pickUpAddress: {
        type: String,
        required: true
    },
    pickUpPostcode: {
        type: Number,
        required: true,
        default: ""
    },

    deliveryAddress: {
        type: String,
        required: true
    },
    deliveryPostcode: {
        type: Number,
        required: true,
        default: ""
    },
    AdditionalInfo: {
        type: String,
        default: "",
    },



});

module.exports = mongoose.model("Delivery", delivery);
