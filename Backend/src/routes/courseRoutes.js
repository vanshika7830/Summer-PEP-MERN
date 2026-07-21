import { Router } from "express";
import { getCourses } from "../controllers/getCourses.js";

const router = Router();

router.get('/', getCourses)

export default router;