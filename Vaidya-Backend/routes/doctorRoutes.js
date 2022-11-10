const router = require('express').Router();
const doctorController = require('../controllers/doctorController');
const Doctor = require('../models/Doctor');

router.get('/', async (req, res) => {
    const doctors = await Doctor.find();
    const date = new Date()
    var d = []
    const time = parseInt((date).toLocaleString('en-US', { hour12: false }).split(', ')[1].split(':')[0] + ((date).toLocaleString('en-US', { hour12: false }).split(', ')[1].split(':')[1]))
    const day = date.getDay()
    for (i = 0; i < doctors.length; i++) {
        if (doctors[i].availability.days.includes(day)) {
            const from = doctors[i].availability.from
            const to = doctors[i].availability.to
            if (from <= to) {
                if (from <= time && time <= to) {
                    d.push(doctors[i])
                }
            }
            else {
                if (time >= from || time <= to) {
                    d.push(doctors[i])
                }
            }
        }
    }
    res.status(200).json({
        title: "doctors",
        doctors: doctors
    });
})
router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (doctor) {
            res.status(200).json(doctor);
        } else {
            res.status(404).json({ msg: "Doctor Not Found!" })
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})
router.post('/signup', doctorController.signup);
router.post('/login', doctorController.login);
router.put('/update/:id', doctorController.update);

module.exports = router;