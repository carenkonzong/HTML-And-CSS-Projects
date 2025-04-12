const images = document.querySelectorAll(".lightbox a");
const overlay = document.createElement("div");
overlay.id = "lightbox-overlay";
document.body.appendChild(overlay);

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

images.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.preventDefault();
    const src = img.href;
    overlay.innerHTML = `<img src="${src}" alt="Lightbox Image">`;
    overlay.style.display = "flex";
  });
});
