const submit = document.querySelector('form');
const radio = document.querySelector('input[name="answer"]:checked');
const checked = document.querySelector('input[name="answer"]:checked')
console.log(checked.value);


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
    document.querySelector('input[name="answer"]:checked').checked = false;
    document.querySelector('input[name="membership"]:checked').checked = false;
    document.querySelector('input[name="checkbox"]').checked = false;

}

submit.addEventListener('submit', function (event) {
    if (document.querySelector('input[name="answer"]:checked').value == 'NO') {
        event.preventDefault()
        sendEmail()
    }
    else {
        event.preventDefault()
        location.assign('./registration/registration.html')
    }
})