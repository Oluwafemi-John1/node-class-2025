const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

const users = mongoose.model('school', userSchema)

module.exports = users