const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkIdRequid(inputArr) {
    inputArr.forEach(input => {
        if (input.value === '') {
            showError(input, `${refactText(input)} is requid`);
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        return showError(input,
            `${refactText(input)} should be at least ${min} characters`);
    } else if (input.value.length > max) {
        return showError(input,
            `${refactText(input)} should be less then ${max} characters`)
    } else {
        showSuccess(input);
    }
}

function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

function refactText(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
form.addEventListener('submit',
    function (e) {
        e.preventDefault();
        checkIdRequid([username, email, password, password2]);
        isValidEmail(email);
        checkLength(username, 3, 15);
        checkLength(password, 6, 15);
        passwordMatch(password, password2);
    })