const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: Number,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
});

module.exports = Contact = mongoose.model("contact", ContactSchema);
