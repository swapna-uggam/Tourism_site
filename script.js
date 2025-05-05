// Script for simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '! We will get back to you soon.');
      // Reset form after submission
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  