const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");
const postRouts = require("./routes/posts");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

db();

app.use("/posts", postRouts); //dont put upper at cors it facess error than 


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on 5000`));