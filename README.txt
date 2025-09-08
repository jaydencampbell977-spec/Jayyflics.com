JayyFlics — Upgraded Mobile Booking Site

What you get
------------
- index.html (mobile-first, animations, gallery, booking form)
- styles.css (modern dark/gothic visual)
- script.js (gallery lightbox, form validation, EmailJS integration)
- assets/ (placeholder images you can replace)

How to use
----------
1. Unzip the project and open the folder in VS Code.
2. Replace the placeholder images in /assets with your own photos (keep the same filenames or update index.html).
3. Open index.html in the browser to preview.

EmailJS setup (no backend required)
----------------------------------
1. Create an account at https://www.emailjs.com/ and go to the dashboard.
2. Add an email service (e.g. Gmail via their connector) — this gives you a SERVICE_ID.
3. Create an email template — note the TEMPLATE_ID and the variable names.
4. In the file script.js replace the placeholders:
   - emailjs.init('YOUR_EMAILJS_USER_ID') => replace with your EmailJS User ID (public key)
   - emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', {...}) => replace with your service and template IDs.
5. Make sure your template in EmailJS has the variables: from_name, reply_to, phone, service, datetime, message.
6. Save and reload index.html and test a booking.

Notes
-----
- The project uses only front-end code. No server is required.
- For production, consider protecting keys or moving emailing to a backend.
- You can further style fonts by adding webfont links (e.g., Cinzel, Old English) in the head of index.html.

Need help?
----------
Tell me if you want me to:
- Auto-fill template variable names for your exact EmailJS template;
- Add server-side (Node.js/Express) email sending instead of EmailJS;
- Deploy this site to Vercel / Netlify / GitHub Pages and wire up a custom domain.
