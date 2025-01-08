import { Router } from "express";
import projectsRouter from "./projects.routes.js";
import tasksRouter from "./tasks.routes.js";

const router = Router();

//projects routes
router.use("/projects", projectsRouter);

//tasks routes
router.use("/tasks", tasksRouter);

export default router;
