function sendEmail(email) {
    let params = {
        answer: document.querySelector('input[name="answer"]:checked').value,
        suggestion: document.getElementById('suggestion').value
    }
    const serviceId = 'service_jkmmnpu'
    const templateId = 'template_cvdxllr'

    emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                document.querySelector('input[name="answer"]:checked').value = ''
                clearRadio()
                document.getElementById('suggestion').value = ''
                console.log(res);
                alert('Success')
            }
        ).catch(err => console.log(err));
}

function clearRadio() {
    let radio = document.getElementById("answer");
    radio.checked = false;
}