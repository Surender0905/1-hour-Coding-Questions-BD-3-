import { Router } from "express";
import {
    addNewTask,
    pendingTask,
    taskByPriority,
    updateTask,
} from "../controllers/task.controller.js";

const router = Router();

//Endpoint: /tasks
//Add a new task

router.get("/", addNewTask);

///View Pending Tasks:

router.get("/pending", pendingTask);

///tasks/:id/status
router.post("/:id/status", updateTask);

///tasks/sort/by-priority
router.get("/sort/by-priority", taskByPriority);

export default router;
