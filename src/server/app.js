import "./db/index.js";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
import booksRouter from "./routes/books.route.js";
import studentCardRouter from "./routes/studentCard.route.js";
import fineDetailsRouter from "./routes/fineDetails.route.js";
import studentFineRouter from "./routes/studentFine.route.js";
import studentDetailRouter from "./routes/details.route.js";
import userRouter from "./routes/user.route.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/studentfine", studentFineRouter);
app.use("/api/v1/finedetail", fineDetailsRouter);
app.use("/api/v1/details", studentDetailRouter);
app.use("/api/v1/student", studentCardRouter);
app.use("/api/v1/books", booksRouter);

export default app;
