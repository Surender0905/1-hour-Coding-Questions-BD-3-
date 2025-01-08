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

const pendingTask = (req, res) => {
    const result = tasks.filter((task) => {
        task.status === "open";
    });

    res.status(200).json({
        status: true,
        tasks: result,
    });
};

//update task

const updateTask = (req, res) => {
    const id = req.params.id;
    const { status } = req.body;

    if (status) {
        return res.status(404).json({
            status: false,
            message: "Error status not found",
        });
    }

    const task = tasks.find((task) => task.id === id);

    task.status = status;

    res.status(200).json({
        status: true,
        message: "Task updated successfully",
    });
};

const taskByPriority = (req, res) => {};

export { addNewTask, pendingTask, updateTask, taskByPriority };
