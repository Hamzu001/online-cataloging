import { Router } from "express";
import { allLibraryBooks, searchBookInLibrary } from "../controllers/books.controller.js";

const router = Router();

router.route("/all-library-books").get(allLibraryBooks);
router.route("/search-library-books").post(searchBookInLibrary);

export default router;
