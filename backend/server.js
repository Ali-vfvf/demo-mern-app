// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 5000;

// ADD
app.get("/api/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a + b });
});

// MULTIPLY
// Mult
app.get("/api/multiply", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a * b });
});

// TEST route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});