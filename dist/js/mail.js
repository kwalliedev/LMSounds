(function () {
    emailjs.init("user_Jt0lHvxSlxt2pFERHlX88");
})();

document.getElementById("submitForm").addEventListener('click', function (e) {
    e.preventDefault()
    let name = document.getElementById('naam');
    let email = document.getElementById('email');
    let selection = document.getElementById('onderwerp');
    let message = document.getElementById('bericht');

    name.classList.replace("border-red-900", "border-gray-200");
    email.classList.replace("border-red-900", "border-gray-200");
    message.classList.replace("border-red-900", "border-gray-200");

    let errorNaam = naam.nextElementSibling;
    errorNaam.classList.add("hidden");

    let errorMail = email.nextElementSibling;
    errorMail.classList.add("hidden");

    let errorMsg = message.nextElementSibling;
    errorMsg.classList.add("hidden");

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if (validateEmail(email.value)) {

        if (name.value !== "" && message.value !== "" && name.value !== undefined && message.value !== undefined) {

            let templateMail = {
                sender_name: name.value,
                sender_mail: email.value,
                dropdown_select: selection.value,
                msg: message.value,
            }
            let mailModel = document.getElementById("modalmail");
            mailModel.classList.replace('translate-x-full', 'translate-x-0')
            setTimeout(function showModel() {
                mailModel.classList.replace('translate-x-0', "translate-x-full")
            }, 3000)

            emailjs.send("service_nqwfamb", "template_a39y0cg", templateMail)
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
            if (name.value === "") {
                errorNaam = naam.nextElementSibling;
                errorNaam.classList.remove("hidden");
                name.classList.replace("border-gray-200", "border-red-900");
            }

            if (message.value === "") {
                errorMsg = message.nextElementSibling;
                errorMsg.classList.remove("hidden");
                message.classList.replace("border-gray-200", "border-red-900");

            }
        }
    } else {
        if (name.value === "") {
            errorNaam = naam.nextElementSibling;
            errorNaam.classList.remove("hidden");
            name.classList.replace("border-gray-200", "border-red-900");
        }
        errorMail = email.nextElementSibling;
        errorMail.classList.remove("hidden");
        email.classList.replace("border-gray-200", "border-red-900");

        if (message.value === "") {
            errorMsg = message.nextElementSibling;
            errorMsg.classList.remove("hidden");
            message.classList.replace("border-gray-200", "border-red-900");

        }
    }
})
