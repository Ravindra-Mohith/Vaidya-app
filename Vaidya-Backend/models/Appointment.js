const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: 'Doctor',
    },
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        enum: ['pending', 'treating', 'completed', 'rejected'],
        default: 'pending',
    },
    illness: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);