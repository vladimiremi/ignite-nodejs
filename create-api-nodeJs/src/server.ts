import express from "express";

const app = express();

app.use(express.json());

app.post("/courses", (request, response) => {
  const { name } = request.body;
  function mimi() {
    let teste = "1";
    let boolean = true;

    return false;
  }

  mimi();

  return response.json({ name });
});

app.listen(3333, () => console.log("Server is running!🚀🚀"));
