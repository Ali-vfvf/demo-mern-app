import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 5000;


// ADD
app.get("/add", (req, res) => {

    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({ result: a + b });

});


// MULTIPLY
// MULTIPLY
app.get("/multiply", (req, res) => {

    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({ result: a * b });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});