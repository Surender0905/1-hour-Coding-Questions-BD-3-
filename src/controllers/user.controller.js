import tasks from "../data/data.js";

const getAllByUser = (req, res) => {
    const user = req.query;

    if (user) {
        res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    const result = tasks.filter((task) => {
        task.assignedTo === user;
    });

    res.status(200).json({
        success: true,
        tasks: result,
    });
};

export { getAllByUser };
