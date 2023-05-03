/* variable */
let modal = null;
const focusableSelector = "button, a , input, textarea";
let focusables = [];
let previouslyFocusedElement = null;

/* Ouverture de la boite modale */
const openModal = function (e) {
  e.preventDefault();
  modal = document.querySelector(e.currentTarget.getAttribute("href"));
  focusables = Array.from(modal.querySelectorAll(focusableSelector));
  document.querySelector(":focus"); /* save de l'ancien element focus */
  modal.style.display = null;
  focusables[0].focus(); /* element 0 en focus au chargement de la page */
  modal.removeAttribute("aria-hidden");
  modal.setAttribute("aria-modal", "true");
  modal.addEventListener("click", closeModal);
  modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-stop")
    .addEventListener("click", stopPropagation);
};

/* Fermeture de la boite modale */
const closeModal = function (e) {
  if (modal === null) return;
  if (previouslyFocusedElement !== null) previouslyFocusedElement.focus();
  e.preventDefault();
  window.setTimeout(function () {
    modal.style.display = "none";
    modal = null;
  }, 500);
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("aria-modal");
  modal.removeEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-close")
    .removeEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-stop")
    .removeEventListener("click", stopPropagation);
};

/* focus seulement sur la boite modal */
const stopPropagation = function (e) {
  e.stopPropagation();
};

/* gestion du tab et du shifttab seulement dans la modal */
const focusInModal = function (e) {
  e.preventDefault();
  let index = focusables.findIndex((f) => f === modal.querySelector(":focus"));
  if (e.shiftkey === true) {
    index--;
  } else {
    index++;
  }
  if (index >= focusables.length) {
    index = 0;
  }
  if (index < 0) {
    index = focusables.length - 1;
  }
  focusables[index].focus();
};

/*appel de la function ouverture de la modal*/
document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});

/* appel de la function fermeture de la modal */
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal(e);
  }
  if (e.key === "Tab" && modal !== null) {
    focusInModal(e);
  }
});
