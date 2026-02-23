const express = require('express');
const router = express.Router();

const { createProject, getAllProject } = require('../controlles/projectController');
const protected = require('../middleware/authMiddleware');

router.post('/', protected, createProject);
router.get('/', protected, getAllProject);

module.exports = router;
