const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach((card, index) => {
      if (filter === "all") {
        // Show all projects smoothly from top
        card.classList.remove("hide");
        card.style.animation = `slideDownFade 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s forwards`;
      } 
      else if (filter === "live") {
        if (card.classList.contains("live")) {
          // Live projects rise up smoothly
          card.classList.remove("hide");
          card.style.animation = `slideUpFade 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s forwards`;
        } else {
          // Others fade out slowly upwards
          card.style.animation = "slideUpFadeOut 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards";
          setTimeout(() => card.classList.add("hide"), 800);
        }
      }
    });
  });
});

// Inject smoother keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideDownFade {
  from { opacity: 0; transform: translateY(-50px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideUpFadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-50px); }
}`;
document.head.appendChild(style);




// Reveal skills on scroll
const skillCards = document.querySelectorAll('.skill-card');

window.addEventListener('scroll', () => {
  skillCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      setTimeout(() => {
        card.classList.add('reveal');
      }, index * 120); // staggered reveal
    }
  });
});
