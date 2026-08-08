import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 9898;

app.get("/", (req, res) => {
  res.json({ message: "Jai sai master jai bapuji mahraj v1" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Health Route !" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
