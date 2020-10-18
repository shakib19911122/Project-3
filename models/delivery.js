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

    timeFrame: {
        type: Number,
        required: true
    },
    
    additionalInfo: {
        type: String,
        default: "",
    },


    deliveryStatus: {
        type: String,
        enum: ["looking for Driver", "Delivering", "Delivered"],
        default: "looking for Driver"
       
    }



});

module.exports = mongoose.model("Delivery", delivery);

