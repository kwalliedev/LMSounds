function email() {
    // setup variabeltjes
    const sgMail = require('@sendgrid/mail')
    require('dotenv').config();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)


// variabeltjes voor in de code eronder
    const ontvangeremail = 'kwalliedev@gmail.com';   // admin dinges

    const naam = document.getElementById('naam').value;             // zender naam
    const zenderemail = document.getElementById('email').value;      // zender email
    const onderwerp = document.getElementById('onderwerp').value;
    const bericht = document.getElementById('bericht').value;



// bericht zelf
    const msg = {
        to: zenderemail, // Change to your recipient
        from: ontvangeremail, // Change to your verified sender
        subject: onderwerp,
        text: bericht,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })

    alert('ge stinkt')
}