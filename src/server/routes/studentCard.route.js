import { Router } from "express";
import { createStudentCard, getStudentCard } from "../controllers/studentCard.controller.js"
import { upload } from "../middlewares/multer.middleware.js";
 
const router = Router()

router.route("/create-student-card").post(upload.single("file") , createStudentCard)
// router.route("/get-student-card").get(getStudentCard)

export default router;