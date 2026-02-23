const TaskModel = require('../models/taskModel');

exports.createTask = async (req, res, next) => {
    try {
        const { title, description, status, priority, dueDate, projectId, assignedTo } = req.body;

        const task = await TaskModel.create({
            title, description, status, priority, dueDate, projectId, assignedTo, createdBy: req.user.id
        })

        res.status(201).json({
            task,
            message: 'Task create Successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.getAllTask = async (req, res, next) => {
    try {
        const { status, projectId, assignedTo } = req.query;
        let filter = {};
        if (status) filter.status = status;
        if (projectId) filter.projectId = projectId;
        if (assignedTo) filter.assignedTo = assignedTo;


        const task = await TaskModel.find(filter).populate("assignedTo", "name email").populate("projectId", "name");

        res.status(201).json({
            message: 'Get All Task',
            task
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}