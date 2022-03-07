const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const { data } = require("./Data");
const { createContent } = require("./jobs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res) => {
  res.json({ data });
});

app.get("/gallery", async (req, res) => {
  res.json({ data: await createContent() });
});

app.listen(process.env.PORT || 3000);
