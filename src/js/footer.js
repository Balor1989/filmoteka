const footerModal = document.querySelector(".overlay");
const footerOpenModalBtn = document.querySelector(".footer-box_line");
const footerCloseModalBtn = document.querySelector('.close_modal_window');


footerOpenModalBtn.addEventListener('click', onOpenModal)
footerCloseModalBtn.addEventListener('click',onCloseModal)
  
function onOpenModal() {
  footerModal.classList.remove("is-hidden")
  document.body.style.overflow = "hidden"
}

function onCloseModal() {
  footerModal.classList.add("is-hidden")
  document.body.style.overflow = ""
}