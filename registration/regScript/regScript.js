const submit = document.querySelector('form');

function sendEmail() {
    let user = {
        name: document.querySelector('input[type="name"]').value,
        surname: document.querySelector('input[type="surname"]').value,
        email: document.querySelector('input[type="email"]').value,
        phoneNumber: document.querySelector('input[type="phoneNumber"]').value,
        suggestion: document.getElementById('suggestion').value,
    }
    const serviceId = 'service_jkmmnpu'
    const templateId = 'template_2i9dxr1'
    emailjs.send(serviceId, templateId, user)
        .then(
            res => {
                console.log(user);
                console.log(res);
                alert('Ձեր պատասխանը ուղարկված է։ Շնորհակալություն պատասխանի համար')
            }
        ).catch(err => console.log(err));
}

submit.addEventListener('submit', function (event) {
    event.preventDefault()
    sendEmail()
})