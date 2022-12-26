import express from "express";

const app = express();

app.get("/home", (request, response) => {
  response.json({ message: "Hello, World!" });
});

app.listen(3000, () => {
  console.log("✔🚀");
});
