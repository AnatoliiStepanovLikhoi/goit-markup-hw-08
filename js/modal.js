(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.modal.addEventListener("click", onBackdropClick);

  function closeModal() {
    window.removeEventListener("keydown", onEscButton);
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  }

  function openModal() {
    window.addEventListener("keydown", onEscButton);
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");
  }

  function onEscButton(event) {
    if (event.code === "Escape") {
      closeModal();
    }
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  }
})();
