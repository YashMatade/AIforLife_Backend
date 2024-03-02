const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { mongodbConnection } = require("./config");
const indexRoutes = require("./routes/index");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRoutes);

app.get("/", (req, res) => {
    res.send("Server is Running")
})

mongodbConnection();

let port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

