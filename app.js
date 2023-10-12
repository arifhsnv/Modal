const modalCard = document.querySelector(".card");
const btnShowModal = document.querySelector(".showingmodal");
const closeBtn=document.querySelector(".close-btn")

const other = function () {
  if (modalCard.classList.contains("none")) {
    modalCard.classList.remove("none")
  }
};
btnShowModal.addEventListener("click", other);

const closeModal=function () {
    if (!modalCard.classList.contains("none")) {
        modalCard.classList.add("none")
    } else {
        modalCard.classList.remove("none")
    }
}
closeBtn.addEventListener("click", closeModal)