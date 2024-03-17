function submit() {
    const emailInput = document.getElementById('e-mail');
    const errorMessage = document.getElementById('error-m');
    const successContainer = document.querySelector('.success-container');
    const firstContainer = document.querySelector('.first-container');

     // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        // Invalid email, show error message and change input style
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        emailInput.style.border = '2px solid red';
        emailInput.style.color = 'red';
        
    } else {
        // Valid email, hide error message and change input style
        errorMessage.style.display = 'none';
        emailInput.style.backgroundColor = 'white';

        // Show success message
        successContainer.style.display = 'block';
        firstContainer.style.display = 'none';
    }
}

