import fetchMoviesDetails from "../js/apiService/fetch/fetchMovieModalValues";
import ref  from './refs/variables';

const { modalInfo } = ref;
const refs = {
  openModal: document.querySelector('.filmlist'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  footerModal: document.querySelector(".overlay"),
  footerOpenModalBtn: document.querySelector(".footer-box_line"),
  footerCloseModalBtn: document.querySelector('.close_modal_window')
};


refs.openModal.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.footerModal.addEventListener('click', onBackdropClick);
refs.footerOpenModalBtn.addEventListener('click', onOpenModal)
refs.footerCloseModalBtn.addEventListener('click', onCloseModal)


function onOpenModal(e) {
  document.body.style.overflow = "hidden"
  window.addEventListener('keydown', onKeyEscPress);
  if (e.target.nodeName === 'UL')  {
    return;
  };

  if (e.target === refs.footerOpenModalBtn) {
    refs.footerModal.classList.remove("is-hidden")
    return
  };
    refs.backdrop.classList.toggle('is-hidden');
    let id = e.target.closest('.photo-card').getAttribute('id')
    fetchMoviesDetails(id);
};

  function onChangeModal() {
    document.body.style.overflow = "";
    window.removeEventListener('keydown', onKeyEscPress);
    if (!refs.backdrop.classList.contains('is-hidden')) {
      refs.backdrop.classList.toggle('is-hidden')
      modalInfo.innerHTML=""
    return
    }

  if (!refs.footerModal.classList.contains('is-hidden')) {
    refs.footerModal.classList.add('is-hidden')
  }
}

function onCloseModal() {
 onChangeModal()
};

function onKeyEscPress(e) {
  if (e.code === "Escape") {
  onChangeModal()
  }
};

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
     onChangeModal()
  }
};

