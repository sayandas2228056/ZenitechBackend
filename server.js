const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const contactFormRoute = require('./src/routes/contactForm.js');
const demoFormRoute = require('./src/routes/demoForm.js');
const appointmentFormRoute = require('./src/routes/appointmentForm.js');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/contact', contactFormRoute);
app.use('/api/demo', demoFormRoute);
app.use('/api/appointment', appointmentFormRoute);

// Export the app for Vercel
module.exports = app;
