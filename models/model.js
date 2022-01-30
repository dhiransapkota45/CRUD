const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    title : String,
    description: String
})

const userModel = new mongoose.model("userModel", userSchema)
module.exports = userModel