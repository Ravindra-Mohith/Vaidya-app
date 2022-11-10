const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "default.jpg",
    },
    qualifications: {
        type: String
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    availability: {
        days: [Number],
        from: Number,
        to: Number
    },
    isAppointed: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model("Doctor", DoctorSchema);