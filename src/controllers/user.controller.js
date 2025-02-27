import tasks from "../data/data.js";

const getAllByUser = (req, res) => {
    const { name } = req.params;
    if (name) {
        res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    const result = tasks.filter(
        (task) => task.assignedTo.toLowerCase() === name.toLowerCase(),
    );

    res.status(200).json({
        success: true,
        tasks: result,
    });
};

export { getAllByUser };
