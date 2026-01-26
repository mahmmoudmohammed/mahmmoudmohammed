function toggleMenuAction() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleThemeAction() {
  const body = document.body;
  const themeIcon = document.querySelector(".toggle-theme i");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

document.querySelector(".scroll-down").addEventListener("click", () => {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});
