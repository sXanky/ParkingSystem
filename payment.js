// Add event listener to form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get payment details
    const cardNumber = document.querySelector('#card-number').value;
    const expirationDate = document.querySelector('#expiration-date').value;
    const cvv = document.querySelector('#cvv').value;
    const amount = document.querySelector('#amount').value;
    // Process payment (TO DO: implement payment gateway)
    console.log('Payment processed!');
    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
});