// Validation for sign-up
const submitBtn = document.getElementById('sign-up-submit');
submitBtn.addEventListener('click', (e) => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    

    if (password !== confirmPassword) {
        e.preventDefault();
        console.log('Passwords do not match');
        document.getElementById('error').style.display = 'block';
        document.getElementById('password').style.border = '2px red solid';
        document.getElementById('confirm-password').style.border = '2px red solid';
    } else {
        console.log('Passwords do match! Logged in!');
        document.getElementById('error').style.display = 'none';
        // document.getElementById('success').style.display = 'block';
        document.getElementById('password').style.border = '1px solid #379683';
        document.getElementById('confirm-password').style.border = '1px solid #379683';
    }
});