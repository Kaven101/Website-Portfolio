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

document
  .getElementById("downloadResume")
  .addEventListener("click", function () {
    // Open the modal
    document.getElementById("pdfPreviewModal").style.display = "flex";
    document.getElementById("pdfPreview").src =
      "https://kaven101.github.io/Website-Portfolio/images&pdf/Resume.pdf";
  });

document.getElementById("closeModal").addEventListener("click", function () {
  // Close the modal
  document.getElementById("pdfPreviewModal").style.display = "none";
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Download the PDF
    const link = document.createElement("a");
    link.href =
      "https://kaven101.github.io/Website-Portfolio/images&pdf/Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  });
