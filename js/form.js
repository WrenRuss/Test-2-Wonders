// Example: Validate feedback form
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email!');
        e.preventDefault(); // Prevent submission
    }
});
