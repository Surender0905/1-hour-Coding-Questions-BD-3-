import { Router } from "express";
import projectsRouter from "./projects.routes.js";
import tasksRouter from "./tasks.routes.js";

import usersRouter from "./user.routes.js";

const router = Router();

//projects routes
router.use("/projects", projectsRouter);

//tasks routes
router.use("/tasks", tasksRouter);

//user routes

router.use("/users", usersRouter);

export default router;
