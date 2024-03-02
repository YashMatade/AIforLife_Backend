const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PledgeData = new Schema({
    companyName: {
        type: String
    },
    representativeFullName: {
        type: String
    },
    officeEmail: {
        type: String
    },
    phoneNummber: {
        type: Number
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model("data", PledgeData);