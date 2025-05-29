const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const contactFormRoute = require('./src/routes/contactForm.js');
const demoFormRoute = require('./src/routes/demoForm.js');
const appointmentFormRoute = require('./src/routes/appointmentForm.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/contact', contactFormRoute);
app.use('/api/demo', demoFormRoute);
app.use('/api/appointment', appointmentFormRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
