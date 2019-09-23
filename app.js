const express = require("express");
const app = express();
// The form data is sent in the POST request body. To extract it,
// use the express.urlencoded() middleware, provided by Express
app.use(express.urlencoded({ extended: true }));

const path = require("path");
const router = express.Router();

router.post("/addContact", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  res.sendFile(path.join(__dirname + "/public/alertMessageContactMe.html"));
  // send email with nodemailer:
  var sendEmail = require("./sendEmail");

  var mailOptions = {
    from: "", // email address
    to: "", // email address
    subject: "mindaugas.pro website message",
    text: "new entry to mongodb: " + name + " " + email + " " + message
  };

  sendEmail.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
