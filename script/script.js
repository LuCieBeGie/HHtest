const submit = document.getElementById('submit');

function sendEmail() {
    let params = {
        answer: document.querySelector('input[name="answer"]:checked').value,
        suggestion: document.getElementById('suggestion').value
    }
    const serviceId = 'service_jkmmnpu'
    const templateId = 'template_cvdxllr'
    emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                clearRadio()
                document.getElementById('suggestion').value = ''
                alert('Ձեր պատասխանը ուղարկված է։ Շնորհակալություն պատասխանի համար')
            }
        ).catch(err => console.log(err));
}

function clearRadio() {
    let radio = document.querySelector('input[name="answer"]:checked');
    radio.checked = false;
}

submit.addEventListener('click', function () {
    let checked = document.querySelector('input[name="answer"]:checked')
    if (!checked) {
        alert('Please select a valid')
        return false
    }
    if (checked.value == 'NO') {
        sendEmail()
    }
    else {
        location.assign('./registration/registration.html')
    }
})