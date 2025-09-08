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

  // EmailJS init - IMPORTANT: replace the placeholders with your EmailJS info
  if(window.emailjs){ emailjs.init('YOUR_EMAILJS_USER_ID'); }

  const form = document.getElementById('bookingForm');
  const status = document.getElementById('status');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'Validating...';
    // simple front-end validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const datetime = document.getElementById('datetime').value;
    if(!name || !email || !phone || !datetime){ status.textContent = 'Please fill required fields.'; return; }

    submitBtn.disabled = true;
    status.textContent = 'Sending...';

    // Send via EmailJS (replace SERVICE_ID and TEMPLATE_ID)
    emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', {
      from_name: name,
      reply_to: email,
      phone: phone,
      service: document.getElementById('service').value,
      datetime: datetime,
      message: document.getElementById('message').value
    }).then(function(){ 
      status.textContent = 'Booking sent! We will contact you soon.';
      form.reset();
      submitBtn.disabled = false;
    }, function(err){
      console.error('EmailJS error', err);
      status.textContent = 'Failed to send. Please check your EmailJS keys in script.js';
      submitBtn.disabled = false;
    });
  });
})();