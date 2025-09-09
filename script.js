// Basic interactivity: gallery lightbox, form validation, EmailJS send
(function(){
  // Lightbox
  const grid = document.querySelectorAll('.grid-item');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');
  grid.forEach(img => {
    img.addEventListener('click', ()=>{
      lbImage.src = img.src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  lbClose.addEventListener('click', ()=>{ lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); });
  lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) { lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); } });
  // EmailJS init - IMPORTANT: replace with your actual Public Key
if (window.emailjs) {
  emailjs.init('YDvKz_waQmALZ2s69'); // your public key
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('status');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Validating...';

    // simple front-end validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const datetime = document.getElementById('datetime').value;
    if (!name || !email || !phone || !datetime) {
      status.textContent = '⚠️ Please fill in all required fields.';
      return;
    }

    submitBtn.disabled = true;
    status.textContent = 'Sending...';

    // Send via EmailJS (replace with your Service ID + Template ID)
    emailjs.send('service_ic9kfj9', 'template_0o9yp4r', {
      from_name: name,
      reply_to: email,
      phone: phone,
      service: document.getElementById('service').value,
      datetime: datetime,
      message: document.getElementById('message').value
    }).then(function () {
      status.textContent = '✅ Booking sent! We will contact you soon.';
      form.reset();
      submitBtn.disabled = false;
    }, function (err) {
      console.error('EmailJS error', err);
      status.textContent = '❌ Failed to send. Please check your EmailJS Service ID, Template ID, or Public Key.';
      submitBtn.disabled = false;
    });
  });
});

