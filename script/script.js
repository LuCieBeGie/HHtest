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
                console.log(document.querySelector('input[name="answer"]:checked').value);
                document.querySelector('input[name="answer"]:checked').value = ''
                document.getElementById('suggestion').value = ''
                console.log(res);
                alert('Success')
            }
        ).catch(err => console.log(err));
}
