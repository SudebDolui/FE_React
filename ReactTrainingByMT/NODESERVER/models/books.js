const mongoose = require("mongoose");

const { Schema} = mongoose;

const bookSchema = new Schema(
    {
        title: { type: String },
        author: { type: String },
        genre: { type: String },
        read: { type: Boolean, default: false },
    }
);

//# Export the Book Model that follows the bookSchema.
module.exports = mongoose.model("Book", bookSchema);

