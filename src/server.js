const path = require("path");
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Project Pal App");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
