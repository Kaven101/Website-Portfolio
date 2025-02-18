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

    // Set the source of the iframe to the resume PDF
    document.getElementById("pdfPreview").src = "/images&pdf/Resume.pdf";
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
    link.href = "/images&pdf/Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  });
