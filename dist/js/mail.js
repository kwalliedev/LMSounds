(function () {
    emailjs.init("user_Jt0lHvxSlxt2pFERHlX88");
})();

document.getElementById("submitForm").addEventListener('click', function (e){
    e.preventDefault()
    var name = document.getElementById('naam').value;
    var email = document.getElementById('email').value
    var selection =  document.getElementById('onderwerp').value
    var message = document.getElementById('bericht').value

    if (name !== "" || email !== "" || message !== "" || name !== undefined || email !== undefined || message !== undefined){
    var templateMail = {
        sender_name: name,
        sender_mail: email,
        dropdown_select: selection,
        msg: message,
    }

    emailjs.send("service_8yacc89","template_a39y0cg", templateMail)
        .then((response) => {
            console.log("send");
        })
        .catch((error) => {
            console.error(error);
        });
        document.getElementById('naam').value = "";
        document.getElementById('email').value = "";
        document.getElementById('bericht').value = "";
    }
})
