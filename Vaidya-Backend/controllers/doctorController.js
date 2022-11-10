const crypt = require('crypto-js');
const Doctor = require('../models/Doctor');

exports.login = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ email: req.body.email });
        (!doctor) && res.status(401).json({ message: "Couldn't find Doctor with entered email" });

        // decryption and extracting original password.
        const pass = crypt.AES.decrypt(doctor.password, process.env.SECRET_KEY.toString());
        const originalPassword = pass.toString(crypt.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json({ message: "Incorrect password!" });

        const { password, ...info } = doctor._doc;
        res.status(200).json({ ...info });
    } catch (err) {
        console.log(err);
    }
}

exports.signup = async (req, res) => {
    const newDoctor = new Doctor({
        name: req.body.username,
        email: req.body.email,
        password: crypt.AES.encrypt(req.body.password, process.env.SECRET_KEY.toString()),
        qualifications: req.body.qualifications,
        age: req.body.age,
        bio: req.body.bio,
        experience: req.body.experience,
        availability: req.body.availability,
    });
    try {
        const doctor = await newDoctor.save();
        res.status(201).json(doctor);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    if (req.body.password) {
        req.body.password = crypt.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }
    try {
        const UpdatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(UpdatedDoctor);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something Went wrong!" });
    }
}
