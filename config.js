const mongoose = require("mongoose");
require("dotenv").config()
exports.mongodbConnection = () => {
    mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log("error occured" + error);
    })
}