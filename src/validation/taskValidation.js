const taskValidation = (data) => {
    const errors = [];

    if (!data.title || typeof data.title !== "string") {
        errors.push('Error: "title" is required.');
    }

    if (!data.project || typeof data.project !== "string") {
        errors.push('Error: "project" is required.');
    }

    if (!data.assignedTo || typeof data.assignedTo !== "string") {
        errors.push('Error: "assignedTo" is required.');
    }

    if (!data.priority || !["Low", "Medium", "High"].includes(data.priority)) {
        errors.push(
            'Error: "priority" is required and must be one of: "Low", "Medium", or "High".',
        );
    }

    if (
        !data.status ||
        !["Not Started", "In Progress", "Completed"].includes(data.status)
    ) {
        errors.push(
            'Error: "status" is required and must be one of: "Not Started", "In Progress", or "Completed".',
        );
    }

    return errors;
};

export default taskValidation;
