const mongoose = require("mongoose");
require("dotenv").config();

const database = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = database;