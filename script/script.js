const submit = document.querySelector('#submit');

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
                alert('Success')
            }
        ).catch(err => console.log(err));
}

function clearRadio() {
    let radio = document.querySelector('input[name="answer"]:checked');
    radio.checked = false;
}

function sendForm() {
    submit.addEventListener('click', function () {
        if (document.querySelector('input[name="answer"]:checked').value == 'NO') {
            sendEmail()
        } else {
            location.assign('./registration/registration.html')
            console.log(false);
        }
    })
}

sendForm()
