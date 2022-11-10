const Appointment = require('../models/Appointment');

exports.create = async (req, res) => {
    const newAppointment = new Appointment({
        doctor: req.body.doctor,
        patient: req.body.patient,
        illness: req.body.illness
    });
    try {
        const appointment = await newAppointment.save();
        res.status(201).json(appointment);
    } catch (e) {
        res.status(500).json(e);
    }
}

exports.accepted = async (req, res) => {
    try {
        const UpdatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: { status: "treating" } }, { new: true });
        res.status(200).json(UpdatedAppointment);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something Went wrong!" });
    }
}
exports.completed = async (req, res) => {
    try {
        const UpdatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: { status: "completed" } }, { new: true });
        res.status(200).json(UpdatedAppointment);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something Went wrong!" });
    }
}

exports.pHis = async (req, res) => {
    try {
        const history = await Appointment.find({
            patient: req.params.id
        })
        if (!history) {
            res.status(200).json({ message: "No appointments made yet!" })
        }
        res.status(200).json(history);
    } catch (e) {
        res.status(500).json(e);
    }
}
exports.dHis = async (req, res) => {
    try {
        const history = await Appointment.find({
            doctor: req.params.id
        })
        if (!history) {
            res.status(200).json({ message: "No appointments made yet!" })
        }
        res.status(200).json(history);
    } catch (e) {
        res.status(500).json(e);
    }

}

exports.penDHis = async (req, res) => {
    try {
        const history = await Appointment.find({
            doctor: req.params.id,
            status: "pending"
        })
        if (!history) {
            res.status(200).json({ message: "No appointments made yet!" })
        }
        history.sort((p1, p2) => {
            (p1.updatedAt > p2.updatedAt) ? 1 : (p1.updatedAt < p2.updatedAt) ? -1 : 0
        })
        res.status(200).json(history);
    } catch (e) {
        res.status(500).json(e);
    }
}

