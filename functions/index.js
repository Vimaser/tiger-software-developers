const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tigersoftwaredevelopers@gmail.com",
    pass: "",
  },
});

exports.sendEmailNotification = functions.firestore
    .document("messages/{messageId}")
    .onCreate((snap, context) => {
      const data = snap.data();

      const mailOptions = {
        from: `TigerSoftwareDevelopers <tigersoftwaredevelopers@gmail.com>`,
        to: "tigersoftwaredevelopers@gmail.com",
        subject: `New Contact Form Submission from ${data.name}`,
        text:
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone Number: ${data.phoneNumber}\n` +
        `Message: ${data.message}`,
      };

      return transporter
          .sendMail(mailOptions)
          .then(() => console.log("Email sent successfully"))
          .catch((error) => console.error("Error sending email", error));
    });
