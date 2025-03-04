const express = require('express');
const router = express.Router();
const { getEmployees, createEmployee } = require('../controllers/employee-controller');

router.get('/all', getEmployees); // Match Flask's /api/v1/employee/all
router.post('/create', createEmployee); // Match Flask's /api/v1/employee/create

module.exports = router;
