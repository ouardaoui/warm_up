document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Collect form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Construct your email content
        const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Example: Sending email using a service like EmailJS
        // Replace with your own email sending logic or API integration
        // This example uses EmailJS (https://www.emailjs.com/)
        emailjs.send(window.EMAILJS_CONFIG.YOUR_SERVICE_ID,window.EMAILJS_CONFIG.YOUR_TEMPLATE_ID, {
            from_name: name,
            message: emailContent,
            reply_to: email,
        })
        .then(function(response) {
            console.log('Email sent!', response);
            alert('Email sent successfully!');
            form.reset(); // Reset the form after successful submission
        }, function(error) {
            console.error('Email send error:', error);
            alert('Failed to send email. Please try again later.');
        });
    });
});
