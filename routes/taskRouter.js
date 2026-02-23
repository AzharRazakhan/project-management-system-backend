const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createTask, getAllTask } = require('../controlles/TaskController')

router.post('/', auth, createTask);
router.get('/', auth, getAllTask)

module.exports = router;