import express from "express";
import { createCourse } from "./routes";

const app = express();

app.get("/home", createCourse);

app.listen(3000, () => {
  console.log("✔🚀");
});
