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
    let info = document.querySelector('input[name="info"]')
    let info_label = document.getElementById('#checkbox')
    valthisform()
    if (!checked) {
        alert('Անհրաժեշտ է ընտրել դաշտերից որևէ մեկը')
        return false
    }
    else if (checked.value == 'NO') {
        sendEmail()
    }
    else {
        location.assign('./registration/registration.html')
    }
})

function valthisform() {
    var checkboxs = document.getElementById("info");
    var okay = false;

    if (checkboxs.checked) {
        okay == true;
        // break;
    }

    if (okay) alert("Thank you for checking a checkbox");
    else alert("Please check a checkbox");
}
