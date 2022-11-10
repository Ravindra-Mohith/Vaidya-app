const router = require("express").Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/patientHistory/:id', appointmentController.pHis);
router.get('/doctorHistory/:id', appointmentController.dHis);
router.get('/pendingHistoryDoc/:id', appointmentController.penDHis);
router.post('/create', appointmentController.create);
router.put('/accepted/:id', appointmentController.accepted);
router.put('/completed/:id', appointmentController.completed);

module.exports = router