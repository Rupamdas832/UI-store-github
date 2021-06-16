const passwordInput = document.querySelector("#password");
const passwordShow = document.querySelector("#passwordShow");

function showPassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

passwordShow.addEventListener("click", showPassword);

const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector("#modalClose");
const modalBox = document.querySelector("modalBox");

const imgModalClose = document.querySelector("#imgModalClose");
const imgModalOpen = document.querySelector("#imgModalOpen");

const modal = document.querySelector("#modal");
const imgModal = document.querySelector("#imgModal");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function openImgModal() {
  imgModal.style.display = "flex";
}

function closeImgModal() {
  imgModal.style.display = "none";
}

modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

imgModalOpen.addEventListener("click", openImgModal);
imgModalClose.addEventListener("click", closeImgModal);
