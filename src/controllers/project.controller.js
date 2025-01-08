import tasks from "../data/data.js";
import { sortProjectsByTaskSize } from "../services/project.js";

//Get all tasks associated with a specific project

const getAllTasksForProject = (req, res) => {
    const projectName = req.params.name;

    if (!projectName) {
        return res.status(400).json({
            success: false,
            message: "Project name is required",
        });
    }

    const tasksForProject = tasks.filter((task) => {
        return task.project === projectName;
    });

    res.status(200).json({
        projectName: projectName,
        tasks: tasksForProject,
        count: tasksForProject.length,
        success: true,
    });
};

//sort projects by number of task assigned

const sortTasksBySize = (req, res) => {
    const result = sortProjectsByTaskSize(tasks);

    res.status(200).json({
        success: true,
        result,
    });
};

export { getAllTasksForProject, sortTasksBySize };
