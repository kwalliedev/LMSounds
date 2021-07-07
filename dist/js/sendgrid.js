
    // setup variabeltjes

    const sgMail = require('@sendgrid/mail')
    require('dotenv').config();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log('voor functie')
    function yeet() {
        console.log('voor')
    // variabeltjes voor in de code eronder
    const ontvangeremail = 'kwalliedev@gmail.com';   // admin dinges

    // const naam = document.getElementById('naam').innerText;             // zender naam
    // const zenderemail = document.getElementById('email').innerText;      // zender email
    // const onderwerp = document.getElementById('onderwerp').innerText;
    // const bericht = document.getElementById('bericht').innerText;


    const zenderemail = 'maximekeni@gmail.com';      // zender email
    const onderwerp = 'yeet';
    const bericht = 'stoeme dinges';

    // bericht zelf
    const msg = {
        to: zenderemail, // Change to your recipient
        from: ontvangeremail, // Change to your verified sender
        subject: onderwerp,
        text: bericht,
        html: '<strong>${bericht}</strong>',
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

        console.log('na')
}