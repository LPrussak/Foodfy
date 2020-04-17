const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
for (let card of cards) {
  card.addEventListener("click", function() {
    const cardId = card.getAttribute("id");
    const title = card.querySelector(".card_content h4").textContent;
    const author = card.querySelector(".card__price").textContent;

    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = `imagens/${cardId}.png`;
    modalOverlay.querySelector("h3").textContent = title;
    modalOverlay.querySelector("p").textContent = author;
  });
}

document.querySelector("a").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("img").src = "";
});
