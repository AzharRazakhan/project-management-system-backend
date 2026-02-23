const ProjectModel = require('../models/projectModel');
const TaskModel = require('../models/taskModel');

exports.getDashbordSummary = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const totalProject = await ProjectModel.countDocuments({
            createdBy: userId
        })

        const projects = await ProjectModel.find({ createdBy: userId }).select('_id');
        const projectIds = projects.map(p => p._id);

        const totalTask = await TaskModel.countDocuments({
            projectId: { $in: projectIds }
        });

        const completedTask = await TaskModel.countDocuments(
            {
                createdBy: userId,
                status: 'Completed'
            }
        );
        const pendingTask = await TaskModel.countDocuments(
            {
                createdBy: userId,
                status: 'Pending',
            }
        );
        const inProgressTask = await TaskModel.countDocuments(
            {
                createdBy: userId,
                status: 'In Progress'
            }
        );
        const myTask = await TaskModel.countDocuments(
            {
                assignedTo: userId
            }
        );


        res.status(201).json({
            message: 'Dashbord count get Successfully',
            totalProject,
            totalTask,
            completedTask,
            inProgressTask,
            pendingTask,
            myTask
        })



    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}