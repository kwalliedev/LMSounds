// using SendGrid's Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sendgrid = require("@sendgrid/mail")("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");
const email = new sendgrid.Email();

email.addTo("test@sendgrid.com");
email.setFrom("you@youremail.com");
email.setSubject("Sending an email with SendGrid is Fun");
email.setHtml("and easy to do anywhere, even with Node.js");

sendgrid.send(email);