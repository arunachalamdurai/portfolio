document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // <== allows animation to replay
      }
    });
  }, { threshold: 0.3 }); // More lenient — fires when ~30% visible

  elements.forEach(el => observer.observe(el));
});
const imgCol = document.querySelector(".col-sm-4"); // or whatever your image column class is
if (imgCol) {
  imgCol.classList.add("animate-image");
  observer.observe(imgCol);
}
