// contact.js
// Handles contact form submission. By default this creates a mailto: link as a fallback.
// If you'd like to use a form backend (Formspree/Netlify), replace the submission code.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  // Replace with your email or a Formspree endpoint if you have one
  const recipientEmail = 'your.email@example.com';
  // const formspreeEndpoint = 'https://formspree.io/f/your-id'; // optional

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'crimson';
      return;
    }

    // Build the mailto link as a fallback
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Try to open the user's email client
    window.location.href = mailto;

    // Show a friendly message (this will show whether mail client opened or not)
    status.textContent = 'Opening your email client to send the message...';
    status.style.color = 'green';

    // If you have a backend endpoint, POST here instead, e.g. fetch(formspreeEndpoint, { method: 'POST', body: new FormData(form) })
  });
});
