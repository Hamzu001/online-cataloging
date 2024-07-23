import "dotenv/config.js";
import express from "express";
import app from "./app.js";

const port = process.env.PORT;

app.use(express.static("dist"), (req, res) => {
  res.sendFile("dist/index.html", { root: process.cwd() });
});

app.listen(port, () =>
  console.log("Server is started: http://localhost:" + port)
);
