const sortProjectsByTaskSize = (tasks) => {
    //  Group tasks by project
    const projects = tasks.reduce((acc, task) => {
        if (!acc[task.project]) {
            acc[task.project] = [];
        }
        acc[task.project].push(task);
        return acc;
    }, {});

    // Sort projects by the number of tasks (in descending order)
    const sortedProjects = Object.keys(projects)
        .map((projectName) => ({
            projectName,
            taskCount: projects[projectName].length,
        }))
        .sort((a, b) => b.taskCount - a.taskCount);

    return sortedProjects;
};

export { sortProjectsByTaskSize };
