import { Router } from "express";
import { createStudentFine, getStudentFine, deleteStudentFine, updateStudentFine } from "../controllers/studentFine.controller.js";

const router = Router();

router.route("/create-student-fine").post(createStudentFine);
router.route("/get-student-fine/:id").get(getStudentFine);
router.route("/update-student-fine/:id").put(updateStudentFine);
router.route("/delete-student-fine/:id").delete(deleteStudentFine)

export default router;
