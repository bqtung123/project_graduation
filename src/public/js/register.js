let dark = localStorage.getItem('dark');
let header = document.getElementsByTagName('header')[0];
header.style.display = "none"
if (dark == 'true') {
    let root = document.querySelector(':root');
    root.style.setProperty('--background-color', 'black');
    root.style.setProperty('--text-color', '#FFFFFF');
    root.style.setProperty('color', '#FFFFFF');
    root.style.setProperty('--border-none', 'var(--border)');
    root.style.setProperty('--background-color-item', 'black');
    root.style.setProperty('--title-color', '#FFFFFF');
    root.style.setProperty('--border-light', 'var(--border-dark)');
    console.log('123');
}
let signup_form = document.querySelector('#register-form');
let signup_btn = document.getElementById('signup-btn');

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};

let password = '';
function checkSignUpInput(input) {
    let value = input.value.trim();
    let form_group = input.parentElement;
    let err_span = signup_form.querySelector(`span[data-err-for="${input.id}"]`);
    let check = true;
    switch (input.getAttribute('type')) {
        case 'email': {
            if (value.length === 0) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Email is not empty';
                check = false;
                break;
            }

            if (!validateEmail(value)) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Email is invalid';check = false;
                break;
            } else {
                form_group.classList.add('success');
                form_group.classList.remove('error');
                err_span.innerHTML = '';
            }
            break;
        }
        case 'password': {
            if (input.getAttribute('name') === 'password') {
                password = input.value;
            } else {
                if (input.value != password) {
                    form_group.classList.add('error');
                    form_group.classList.remove('success');
                    err_span.innerHTML = 'Confirm password not match with password';
                    check = false;
                    break;
                }
            }
            if (value.length < 6) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_span.innerHTML = 'Password must be at least 6 characters';
                check = false;
            } else {
                form_group.classList.add('success');
                form_group.classList.remove('error');
                check = false;
                err_span.innerHTML = '';
            }
            break;
        }
        case 'text': {
            if (value.length === 0) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                check = false;
                err_span.innerHTML = 'Full name is not empty';
            } else {
                form_group.classList.add('success');
                form_group.classList.remove('error');
                
                err_span.innerHTML = '';
            }
            break;
        }

        case 'date': {
            if (value === '') {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                check = false;
                err_span.innerHTML = 'Please select birthday';
                break;
            }

            let birthday = new Date(value);
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            let currentDay = new Date(date);

            if (birthday > currentDay) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                check = false;
                err_span.innerHTML = 'Please select birthday less than today';
                break;
            } else {
                err_span.innerHTML = '';
                form_group.classList.add('success');
                form_group.classList.remove('error');
            }
        }
    }
    if (check) {
        document.getElementById('signup-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('signup-btn').setAttribute('disabled', 'disabled')
    }
}

function checkSignUpForm() {
    let inputs = signup_form.querySelectorAll('.form-group__input');
    inputs.forEach((input) => checkSignUpInput(input));
}

signup_btn.onclick = (event) => {
    checkSignUpForm();
};

let inputs = signup_form.querySelectorAll('.form-group__input');
inputs.forEach((input) => {
    input.addEventListener('keyup', () => {
        checkSignUpInput(input);
    });
});

inputs.forEach((input) => {
    input.addEventListener('focusout', () => {
        checkSignUpInput(input);
    });
});
