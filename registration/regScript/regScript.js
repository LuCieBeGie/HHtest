const submit = document.querySelector('form');
const name = document.querySelector('input[type="name"]')
const surname = document.querySelector('input[type="surname"]')
const email = document.querySelector('input[type="email"]')
const phoneNumber = document.querySelector('input[type="tel"]')
const suggestion = document.getElementById('suggestion')

function sendEmail() {
    let user = {
        name: name.value, 
        surname: surname.value, 
        email: email.value,
        phoneNumber: phoneNumber.value,
        suggestion: suggestion.value,
    }
    const serviceId = 'service_jkmmnpu'
    const templateId = 'template_2i9dxr1'
    emailjs.send(serviceId, templateId, user)
        .then(
            res => {
                clearForm()
                alert('Ձեր պատասխանը ուղարկված է։ Շնորհակալություն պատասխանի համար')

            }
        ).catch(err => console.log(err));
}

submit.addEventListener('submit', function (event) {
    event.preventDefault()
    sendEmail()
})

function clearForm() {
    name.value = ''
    surname.value = ''
    email.value = ''
    phoneNumber.value = ''
    suggestion.value = ''
}