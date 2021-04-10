import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import("./mongo-connection.js");
import { PORT } from "./mongo-connection.js";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log("Server Listening");
});
