// Validate feedback form on submit
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const memories = document.getElementById('memories').value;

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }

    if (new Date(date) > new Date()) {
        alert('Please select a valid date in the past.');
        e.preventDefault();
        return;
    }

    if (memories.trim() === '') {
        alert('Please share your experiences or memories.');
        e.preventDefault();
    } else {
        alert('Thank you for your feedback!');
    }
});