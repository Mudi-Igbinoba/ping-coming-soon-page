// Define elements
const error = document.querySelector('#error');
const formEl = document.querySelector('#form');
const email = document.querySelector('#email');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    if (email.validity.typeMismatch) {
        error.style.display = 'block';
        error.textContent = 'Please provide a valid email address';
        email.classList.add('invalid');
    } else if (email.value === '') {
        error.style.display = 'block';
        error.textContent =
            'Whoops! It looks like you forgot to add your email';
        email.classList.add('invalid');
    } else {
        error.style.display = 'none';
        error.textContent = '';
        email.classList.remove('invalid');
    }
});
