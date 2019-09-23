var nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "", // email address
    pass: "" // password of above email address
  }
});
