const mongoose = require("mongoose");
require("dotenv").config();

exports.mongodbConnection = () => {
    const mongoURL = process.env.MONGOURL;
    mongoose.connect(mongoURL).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log("Error occurred:", error);
    });
};