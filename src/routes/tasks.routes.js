import { Router } from "express";
import { addNewTask } from "../controllers/task.controller.js";

const router = Router();

//Endpoint: /tasks
//Add a new task

router.get("/", addNewTask);

export default router;
