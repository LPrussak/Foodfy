const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
for (let card of cards) {
  card.addEventListener("click", function() {
    const imgId = card.getAttribute("id");
    modalOverlay.classList.add("active");
  });
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});
modalOverlay.querySelector("img").src = "imagens/asinhas.png";
