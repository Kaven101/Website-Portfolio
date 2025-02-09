const button = document.querySelector(".copy-button");

button.addEventListener("click", () => {
  copy("businesskevinl360@gmail.com");
  alert("Email copied to clipboard 📋");
});

const copy = (text) => navigator.clipboard.writeText(text);
// Scroll Animation using Intersection Observer for each sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
