// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll reveal (IntersectionObserver)
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

// Tilt effect (subtle, performant)
function initTilt(selector) {
  const items = document.querySelectorAll(selector);
  items.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const rx = ((y / r.height) - 0.5) * -8; // rotateX
      const ry = ((x / r.width) - 0.5) * 10;  // rotateY

      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-1px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

initTilt(".tilt");
