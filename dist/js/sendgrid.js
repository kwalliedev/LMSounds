function mail() {

    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey('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')
    console.log('voor')

    const ontvangeremail = 'kwalliedev@gmail.com';   // admin dinges

// const naam = document.getElementById('naam').innerText;             // zender naam
// const zenderemail = document.getElementById('email').innerText;      // zender email
// const onderwerp = document.getElementById('onderwerp').innerText;
// const bericht = document.getElementById('bericht').innerText;


    const zenderemail = 'maximekeni@gmail.com';      // zender email
    const onderwerp = 'ond';
    const bericht = 'bericht';

    const msg = {
        to: zenderemail, // Change to your recipient
        from: ontvangeremail, // Change to your verified sender
        subject: onderwerp,
        text: bericht,
        html: '<strong>${bericht}</strong>',
    }

    sgMail.send(msg).then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
    })
        .catch((error) => {
            console.error(error)
        })
}