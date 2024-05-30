import './db/index.js'
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
import booksRouter from "./routes/books.route.js";
import studentCardRouter from "./routes/studentCard.route.js";

app.use("/api/v1/books", booksRouter);
app.use("/api/v1/student", studentCardRouter);

export default app;
