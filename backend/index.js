require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");
// const { json } = require("express");

// middleware
app.use(cors());
app.use(express.json());

app.use(require("./routes/product"));

app.use(require("./routes/user"));

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`backend running on port ${port}`);
});