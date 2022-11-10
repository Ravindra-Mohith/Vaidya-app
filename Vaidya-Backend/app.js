const app = require("express")();
const userRouter = require('./routes/userRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const appointmentRouter = require('./routes/appointmentRoutes');

// body parsing middleware
app.use(require('express').json());

app.use('/api/users', userRouter);
app.use('/api/doctors', doctorRouter);
app.use('/api/appointments', appointmentRouter);
module.exports = app; 