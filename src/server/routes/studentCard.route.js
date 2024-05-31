import { Router } from "express";
import { createStudentCard, deleteStudentCard, getStudentCard, searchStudentCard, updateStudentCard } from "../controllers/studentCard.controller.js"
import { upload} from "../middlewares/multer.middleware.js";
 
const router = Router()

router.route("/create-student-card").post(upload.single("file"), createStudentCard)
router.route("/get-student-card").get(getStudentCard)
router.route("/search-student-card/:id").get(searchStudentCard)
router.route("/update-student-card/:id").put(updateStudentCard)
router.route("/delete-student-card/:id").delete(deleteStudentCard)

export default router;