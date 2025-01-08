import { Router } from "express";
import { getAllByUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/:name/tasks", getAllByUser);

export default router;
