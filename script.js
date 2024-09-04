const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const sections = document.querySelectorAll("section");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("header");
  if (window.scrollY > 0) {
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.backdropFilter = "none";
  }

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
