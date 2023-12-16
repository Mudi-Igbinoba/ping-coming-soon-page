// Define elements
const error = document.querySelector('#error');
const formEl = document.querySelector('#form');
const email = document.querySelector('#email');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    email.validity.typeMismatch
        ? (error.textContent = 'Please provide a valid email address')
        : email.value === ''
        ? (error.textContent =
              'Whoops! It looks like you forgot to add your email')
        : (error.textContent = '');
});
