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

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = "🎧 Pause Music";
  } else {
    music.pause();
    musicBtn.innerHTML = "🎧 Play Music";
  }
});
const glow=document.querySelector(".cursor-glow");

let timer;

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

glow.style.opacity=".9";

clearTimeout(timer);

timer=setTimeout(()=>{

glow.style.opacity="0";

},120);

});
const stars = document.getElementById("stars");
const icons = ["✦","✧","✦"];

const positions = [];

const totalStars = 67;

for(let i = 0; i < totalStars; i++){

    let x, y;
    let valid = false;

    while(!valid){

        x = Math.random() * window.innerWidth;
        y = Math.random() * document.body.scrollHeight;

        valid = true;

        for(const pos of positions){

            const dx = x - pos.x;
            const dy = y - pos.y;

            if(Math.sqrt(dx*dx + dy*dy) < 120){
                valid = false;
                break;
            }

        }

    }

    positions.push({x,y});

    const star = document.createElement("span");
    star.className = "star";

    star.textContent =
        icons[Math.floor(Math.random()*icons.length)];

    star.style.left = x + "px";
    star.style.top = y + "px";

    star.style.fontSize =
        (10 + Math.random()*8) + "px";

    star.style.animationDelay =
        Math.random()*6 + "s";

    stars.appendChild(star);

}
const popup = document.getElementById("popupOverlay");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

let popupTimer;

function showPopup(title, cards){

    popup.classList.add("show");

    popupContent.innerHTML = `
        <h2 class="popup-title">${title}</h2>

        <div class="popup-grid">
            ${cards}
        </div>
    `;

    clearTimeout(popupTimer);

    popupTimer = setTimeout(() => {
        popup.classList.remove("show");
    }, 5000);

}

closePopup.onclick = () => {

    popup.classList.remove("show");

};

popup.onclick = (e) => {

    if(e.target === popup){

        popup.classList.remove("show");

    }

}
document.getElementById("musicCard").onclick=()=>{

showPopup("🎧 Favorite Music",`

<div class="popup-card big">
<img src="images/laufey.jpg">
</div>

<div class="popup-card">
<img src="images/fujikaze.jpg">
</div>

<div class="popup-card">
<img src="images/nctdream.jpg">
</div>

<div class="popup-card wide">
<img src="images/mozart.jpg">
</div>

`);

};
document.getElementById("cookingCard").onclick=()=>{

showPopup("🍳 Cooking",`

<div class="popup-card big">
<img src="images/cooking.jpg">
</div>

<div class="popup-card big">
<img src="images/baking.jpg">
</div>

`);

};
document.getElementById("animeCard").onclick=()=>{

showPopup("🎥 Anime & Streams",`

<div class="popup-card big">
<img src="images/onepiece.jpg">
</div>

<div class="popup-card">
<img src="images/spyxfamily.jpg">
</div>

<div class="popup-card">
<img src="images/demonslayer.jpg">
</div>

<div class="popup-card">
<img src="images/ghibli.jpg">
</div>

<div class="popup-card">
<img src="images/sean.jpg">
</div>

<div class="popup-card">
<img src="images/youtube.jpg">
</div>

<div class="popup-card">
<img src="images/tiktok.jpg">
</div>

`);

};