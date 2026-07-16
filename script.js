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

popup.onclick = (e) => {

    if(e.target === popup){

        popup.classList.remove("show");

    }

}
document.getElementById("musicCard").onclick=()=>{

showPopup("🎧 Favorite Music",`

<div class="popup-card">
<img src="images/laufey.jpg">
<div class="photo-text">
Laufey 🎷
</div>
</div>


<div class="popup-card">
<img src="images/fujikaze.jpg">
<div class="photo-text">
Fujii Kaze 🌿
</div>
</div>


<div class="popup-card">
<img src="images/nctdream.jpg">
<div class="photo-text">
NCT Dream 💚
</div>
</div>


<div class="popup-card">
<img src="images/mozart.jpg">
<div class="photo-text">
Mozart 🎼
</div>
</div>


<div class="popup-caption">

Music is my little escape.  
It helps me recharge, improve my mood,
and stay inspired during my creative journey.

</div>

`);

};
document.getElementById("cookingCard").onclick=()=>{

showPopup("🍳 Cooking",`

<div class="popup-card">
<img src="images/cooking.jpg">

<div class="photo-text">
Cooking 🍳
</div>

</div>


<div class="popup-card">
<img src="images/baking.jpg">

<div class="photo-text">
Baking 🧁
</div>

</div>


<div class="popup-caption">

I enjoy making simple homemade dishes,
especially pancakes and egg-based recipes.
Cooking helps me explore creativity,
patience, and new flavors.

</div>

`);

};
document.getElementById("animeCard").onclick=()=>{

showPopup("🎥 Anime & Streams",`

<!-- ANIME SECTION -->

<div class="popup-card">
<img src="images/onepiece.jpg">

<div class="photo-text">
One Piece 🌊
</div>

</div>


<div class="popup-card">
<img src="images/spyxfamily.jpg">

<div class="photo-text">
Spy x Family 🕵️
</div>

</div>


<div class="popup-card">
<img src="images/demonslayer.jpg">

<div class="photo-text">
Demon Slayer ⚔️
</div>

</div>


<div class="popup-card">
<img src="images/ghibli.jpg">

<div class="photo-text">
Ghibli ✨
</div>

</div>


<div class="popup-caption">

Anime is one of my favorite ways to relax and
find inspiration through creative stories,
unique characters, and beautiful worlds.

</div>



<!-- STREAM SECTION -->
<div class="popup-card">
<img src="images/sean.jpg">

<div class="photo-text">
Sean 🎧
</div>

</div>


<div class="popup-card">
<img src="images/youtube.png">

<div class="photo-text">
YouTube ▶️
</div>

</div>


<div class="popup-card">
<img src="images/tiktok.png">

<div class="photo-text">
TikTok 🎬
</div>

</div>


<div class="popup-caption">

Watching streams and online content helps me
relax after studying, discover new ideas,
and enjoy creative content from different creators.

</div>


`);

};
