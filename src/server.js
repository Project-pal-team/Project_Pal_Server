import path from "path";
import express from "express";

const app = express();
const testing = 5;

const PORT = 3000;

// Get the directory name using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Project Pal App");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
