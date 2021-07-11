(function () {
    emailjs.init("user_Jt0lHvxSlxt2pFERHlX88");
})();

document.getElementById("submitForm").addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('naam');
    var email = document.getElementById('email');
    var selection = document.getElementById('onderwerp');
    var message = document.getElementById('bericht');

    name.classList.replace("border-red-900", "border-gray-200");
    email.classList.replace("border-red-900", "border-gray-200");
    message.classList.replace("border-red-900", "border-gray-200");

    var errorNaam = naam.nextElementSibling;
    errorNaam.classList.add("hidden");

    var errorMail = email.nextElementSibling;
    errorMail.classList.add("hidden");

    var errorMsg = message.nextElementSibling;
    errorMsg.classList.add("hidden");

    if (name.value !== "" && email.value !== "" && message.value !== "" && name.value !== undefined && email.value !== undefined && message.value !== undefined) {
        var templateMail = {
            sender_name: name.value,
            sender_mail: email.value,
            dropdown_select: selection.value,
            msg: message.value,
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
    } else {
        if (name.value === ""){
            errorNaam = naam.nextElementSibling;
            errorNaam.classList.remove("hidden");
            name.classList.replace("border-gray-200", "border-red-900");
        }
        if (email.value === ""){
            errorMail = email.nextElementSibling;
            errorMail.classList.remove("hidden");
            email.classList.replace("border-gray-200", "border-red-900");

        }

        if (message.value === ""){
            errorMsg = message.nextElementSibling;
            errorMsg.classList.remove("hidden");
            message.classList.replace("border-gray-200", "border-red-900");

        }
    }
})
