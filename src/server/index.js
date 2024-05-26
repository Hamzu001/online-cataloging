import ViteExpress from "vite-express";
import app from "./app.js";

const PORT = 3000;

export default ViteExpress.listen(app, PORT, () => {
  console.log("Server is runing on port", PORT);
});
