const mongoose = require("mongoose")

module.exports = mongoose.model("skill", new mongoose.Schema({
    name: String
}, { timestamps: true }))