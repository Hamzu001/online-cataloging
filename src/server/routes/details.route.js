import { Router } from "express";
import { studentAllDetail } from "../controllers/details.controller.js";

const router = Router();

router.route("/all-student-details/").get(studentAllDetail);

export default router;
