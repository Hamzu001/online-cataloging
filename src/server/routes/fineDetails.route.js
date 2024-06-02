import { Router } from "express";
import { createFine, deleteFine, getFine, updateFine } from "../controllers/fineDetails.controller.js";

const router = Router();

router.route("/create-fine-detail").post(createFine);
router.route("/get-fine-detail").get(getFine);
router.route("/update-fine-detail/:id").put(updateFine);
router.route("/delete-fine-detail/:id").delete(deleteFine)

export default router;
