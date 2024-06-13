const mongoose = require("mongoose");

const newBlogs = new mongoose.Schema({
    filename: {
        type: String,
    },
    contentType: {
        type: String,
    },
    blogImage: {
        type: String, // Store the image data in binary format
    },
    blogTitle: { type: String },
    blogDescription: { type: String },
}, { timestamps: true });


module.exports = mongoose.model("NewBlogs", newBlogs);