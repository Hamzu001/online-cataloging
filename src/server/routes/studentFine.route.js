import { Router } from "express";
import { createStudentFine, getFine } from "../controllers/studentFine.controller.js";

const router = Router();

router.route("/create-student-fine").post(createStudentFine);
router.route("/get-student-fine/:id").get(getFine);
// router.route("/update-student-fine/:id").put(updateFine);
// router.route("/delete-student-fine/:id").delete(deleteFine)

export default router;
