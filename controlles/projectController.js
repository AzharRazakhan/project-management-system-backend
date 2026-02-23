const ProjectModel = require('../models/projectModel');

exports.createProject = async (req, res, next) => {
    try {
        const { name, description, startDate, endDate } = req.body;

        const project = await ProjectModel.create({
            name,
            description,
            startDate,
            endDate,
            createdBy: req.user.id
        })

        res.status(201).json({
            message: "Project created successfully",
            project,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.getAllProject = async (req, res, next) => {
    try {
        const project = await ProjectModel.find({
            createdBy: req.user.id
        })
        res.status(201).json({
            message: "Get All Project Successfully",
            project,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}