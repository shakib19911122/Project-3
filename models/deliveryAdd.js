const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliveryInfoSchema = new mongoose.Schema({

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

const DeliveryInfo = mongoose.model("DeliveryInfo", DeliveryInfoSchema);

module.exports = DeliveryInfo;