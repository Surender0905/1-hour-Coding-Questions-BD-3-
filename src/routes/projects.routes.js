import { Router } from "express";
import {
    getAllTasksForProject,
    sortTasksBySize,
} from "../controllers/project.controller.js";

const router = Router();

//View All Tasks for a Project
//Endpoint: /projects/:name/tasks

router.get("/:name/tasks", getAllTasksForProject);

//Endpoint: /projects/sort/by-task-size'
//Sort Tasks by Project Size

router.get("/sort/by-task-size", sortTasksBySize);

export default router;
