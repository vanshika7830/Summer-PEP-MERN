import { Router } from "express";
import { getCourses } from "../controllers/course/getCourses.js";
import { addCourse } from "../controllers/course/addCourse.js";
import { authorize } from "../middleware/authorise.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.get('/get-courses', getCourses)
router.post('/create-courses', authenticate, authorize('instructor'), addCourse )
// router.get('/my-courses', myCourse)

export default router;