const express = require('express');
const router = express.Router();
const { getDashbordSummary } = require('../controlles/dashbordController');
const protected = require('../middleware/authMiddleware');

router.get('/', protected, getDashbordSummary)

module.exports = router;