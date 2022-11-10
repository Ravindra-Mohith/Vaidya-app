const crypt = require('crypto-js');
const User = require('../models/User');
const fast2sms = require('fast-two-sms');

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        (!user) && res.status(401).json({ message: "Couldn't find User with entered email" });

        // decryption and extracting original password.
        const pass = crypt.AES.decrypt(user.password, process.env.SECRET_KEY.toString());
        const originalPassword = pass.toString(crypt.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json({ message: "Incorrect password!" });

        const { password, ...info } = user._doc;
        res.status(200).json({ ...info });
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.signup = async (req, res) => {
    // try {
    //     const r = await fast2sms.sendMessage({ authorization: "H9YgZWmIDKCScTesVifa1x30RrbNMyv52PFEhAljQJGtoUku8LEythUeiCxqz34YDvcJAV60Tu2nk7jm", message: "test OTP", number: '9398280798' })
    //     res.json(r)
    // }
    // catch (e) { res.json(e) }
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: crypt.AES.encrypt(req.body.password, process.env.SECRET_KEY.toString()),
        mobile: req.body.mobile,
        address: req.body.address
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
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
        const UpdatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(UpdatedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something Went wrong!" });
    }
}
