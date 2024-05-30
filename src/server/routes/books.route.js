import { Router } from "express";
import { allBooks } from "../controllers/books.controller.js";

const router = Router();

router.route("/allbooks").get(allBooks);

export default router;
