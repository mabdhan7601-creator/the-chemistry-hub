document.addEventListener('DOMContentLoaded', () => {
  const bookSeatBtn = document.getElementById('bookSeatBtn');
  const enrollFormSection = document.getElementById('enrollForm');

  // Scroll to enrollment form
  bookSeatBtn.addEventListener('click', () => {
    enrollFormSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Form submission with WhatsApp automation
  const enrollmentForm = document.getElementById('enrollmentForm');

  enrollmentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form default submission

    // Get form values
    const fullName = encodeURIComponent(document.getElementById('fullName').value.trim());
    const fatherName = encodeURIComponent(document.getElementById('fatherName').value.trim());
    const level = encodeURIComponent(document.getElementById('level').value);
    const phoneNumber = encodeURIComponent(document.getElementById('phoneNumber').value.trim());

    // WhatsApp target number (with country code, without +)
    const targetNumber = '923108329430';

    // Construct message with line breaks using %0A
    const message =
      `Hello The Chemistry Hub! I want to book a seat. Here are my details:%0A` +
      `Name: ${fullName}%0A` +
      `Father Name: ${fatherName}%0A` +
      `Level: ${level}%0A` +
      `Phone: ${phoneNumber}`;

    // Open WhatsApp link in new tab/window
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    enrollmentForm.reset();
  });
});