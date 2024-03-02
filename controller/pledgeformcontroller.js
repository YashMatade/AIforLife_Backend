const pledgeformModel = require("../model/pledgeform");
const nodemailer = require('nodemailer');
require("dotenv").config();

exports.save = async (req, res) => {
    try {
        const { companyName, representativeFullName, officeEmail, phoneNummber, message } = req.body;

        let newPledge = new pledgeformModel({
            companyName, representativeFullName, officeEmail, phoneNummber, message
        });

        let data = await newPledge.save();

        const userData = `
            <h2 style="color: #3498db;">New Lead Generated:</h2>

            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Company Name:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${companyName}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Representative Full Name:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${representativeFullName}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Office Email:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${officeEmail}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Phone Number:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${phoneNummber}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Message:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${message}</td>
                </tr>
            </table>
        `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',

            auth: {
                user: "inbox@5w1h.media",
                pass: "ubko gjgy dnyq hgux"
            }
        });


        const sendEmail = (subject, body) => {
            // Define email options with HTML content
            const mailOptions = {
                from: "inbox@5w1h.media",
                to: "inbox@5w1h.media",
                subject: subject,
                html: body // Use 'html' instead of 'text' for HTML content
            };

            // Send email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        };

        const subject = 'New Lead Generated';
        sendEmail(subject, userData);

        res.status(200).json({ err: 200, msg: "Saved successfully", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 500, message: "server error" });
    }
};

