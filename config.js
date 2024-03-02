const mongoose = require("mongoose");
require("dotenv").config();

exports.mongodbConnection = () => {
    const mongoURL = "mongodb+srv://anm:XBVpcdyavDv5Jm6X@cluster0.alhfdqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongoose.connect(mongoURL).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log("Error occurred:", error);
    });
};