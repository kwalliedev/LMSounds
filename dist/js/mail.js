// get a instance of sendgrid and set the API key
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey("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");

// construct an email
const email = {
    to: "maxim.snoeys@telenet.be",
    from: "kwalliedev@gmail.com",
    subject: "Dit is een test, yeet",
    text: "JOE FAK YOU",
};

// send the email via sendgrid
sendgrid.send(email);