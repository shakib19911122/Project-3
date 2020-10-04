const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new mongoose.Schema({


    ParcelID:{
        type: Number,

    },

    timeFrame: {
        type: Number,
        required: true
    },

    assignedDriverID: {
        type: Number
    }



});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;