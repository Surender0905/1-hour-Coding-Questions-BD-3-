import { Router } from "express";
import { getAllByUser } from "../controllers/user.controller";

const router = Router();

router.get("/", getAllByUser);

export default router;
