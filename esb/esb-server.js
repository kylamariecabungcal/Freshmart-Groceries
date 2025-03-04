require('dotenv').config();
const express = require('express');

// Services
const productServices = require('./routes/inventory-route');
const posServices = require('./routes/pos-routes');
const authService = require('./routes/auth-routes');
const employeeServices = require('./routes/employee-routes');

// Request mapper
const mapper = '/api/v1';

// Init app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Define port
const PORT = process.env.PORT || 3002;

// API Routes
app.use(`${mapper}/inventory`, productServices);
app.use(`${mapper}/pos`, posServices);
app.use(`${mapper}/auth`, authService);
app.use(`${mapper}/employee`, employeeServices);

// If no request matches
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
