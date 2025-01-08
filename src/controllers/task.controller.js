import tasks from "../data/data.js";
import taskValidation from "../validation/taskValidation.js";

const addNewTask = (req, res) => {
    const { title, project, assignedTo, priority, status } = req.query;

    const data = {
        title,
        project,
        assignedTo,
        priority,
        status,
    };

    const errors = taskValidation(data);
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: errors,
        });
    }

    //add task

    tasks.push({ ...data, id: new Date().getTime() });

    res.status(201).json({
        success: true,
        message: "Task added successfully",
    });
};

export { addNewTask };
