import fetchMoviesDetails from "../apiService/fetch/fetchMovieModalValues";
import ref  from '../refs/variables';


const { modalInfo, openModal,closeModalBtn, footerOpenModalBtn } = ref;

const refs = {
  backdrop: document.querySelector('[data-modal]'),
  footerModal: document.querySelector(".overlay"),
  footerCloseModalBtn: document.querySelector('.close_modal_window'),
  openWatchedList: document.querySelector('.watched-list'),
  openQueueList: document.querySelector('.queue-list')
};
 
// Hendlers
openModal.addEventListener('click', onOpenModal);
refs.openWatchedList.addEventListener('click', onOpenModal);
refs.openQueueList.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
footerOpenModalBtn.addEventListener('click', onOpenModal);
refs.footerCloseModalBtn.addEventListener('click', onCloseModal);


function onOpenModal(e) {
  document.body.style.overflow = "hidden";
  window.addEventListener('keydown', onKeyEscPress);

  if (e.target.nodeName === 'UL')  {
    return;
  };

  if (e.target === footerOpenModalBtn) {
    refs.footerModal.classList.remove("is-hidden");
    return;
  };

  refs.backdrop.classList.toggle('is-hidden');
  let id = e.target.closest('.photo-card').getAttribute('id');
  fetchMoviesDetails(id);
  }


function onChangeModal() {
  document.body.style.overflow = "";
  localStorage.removeItem('movie');
  window.removeEventListener('keydown', onKeyEscPress);

  if (!refs.backdrop.classList.contains('is-hidden')) {
    refs.backdrop.classList.toggle('is-hidden');
    modalInfo.innerHTML = "";
    return;
  };

  if (!refs.footerModal.classList.contains('is-hidden')) {
    refs.footerModal.classList.add('is-hidden');
  };

};

function onCloseModal() {
  onChangeModal();
};

function onKeyEscPress(e) {
  if (e.code === "Escape") {
    onChangeModal();
  };
};

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onChangeModal();
  };
};

