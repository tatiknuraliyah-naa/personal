document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, offset: 70, duration: 650, easing: 'ease-out-cubic' });

  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  const navItems = [...document.querySelectorAll('.nav-links a')];
  const sections = navItems.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', updateHeader, { passive: true }); updateHeader();
  menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.classList.toggle('open', open); menu.setAttribute('aria-expanded', open); });
  navItems.forEach((link) => link.addEventListener('click', () => { links.classList.remove('open'); menu.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navItems.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));

  const form = document.querySelector('.contact-form');
form.addEventListener('submit', () => {
  form.querySelector('.form-message').textContent = 'Mengirim pesan...';
});});
const form = document.querySelector(".contact-form");
const message = form.querySelector(".form-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = form.querySelector("button");
  button.textContent = "Sending...";
  button.disabled = true;

  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/mvzeoeqa", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
    message.textContent = "✨ Pesan berhasil terkirim!";
    form.reset();

    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    message.textContent = "❌ Gagal mengirim pesan.";
  }

  button.textContent = "Send Message";
  button.disabled = false;
});