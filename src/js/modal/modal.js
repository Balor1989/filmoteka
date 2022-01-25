import fetchMoviesDetails from "../apiService/fetch/fetchMovieModalValues";
import refs  from '../refs/variables';


const { modalInfo, openModal, closeModalBtn, footerOpenModalBtn, footerModal,
  backdrop, footerCloseModalBtn, openWatchedList, openQueueList, footerBoxIcon } = refs;

// Hendlers
openModal.addEventListener('click', onOpenModal);
openWatchedList.addEventListener('click', onOpenModal);
openQueueList.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick);
footerModal.addEventListener('click', onBackdropClick);
footerOpenModalBtn.addEventListener('click', onOpenModal);
footerCloseModalBtn.addEventListener('click', onCloseModal);

// Opens a modal window
function onOpenModal(e) {
  document.body.style.overflow = "hidden";
  footerBoxIcon.style.animation = 'none';
  window.addEventListener('keydown', onKeyEscPress);

  if (e.target.nodeName === 'UL')  {
    return;
  };

  if (e.target === footerOpenModalBtn) {
    footerModal.classList.remove("is-hidden");
    return;
  };

  backdrop.classList.toggle('is-hidden');
  let id = e.target.closest('.photo-card').getAttribute('id');
  fetchMoviesDetails(id);
  }

// Hides all modal options
function onChangeModal() {
  document.body.style.overflow = "";
  localStorage.removeItem('movie');
  footerBoxIcon.style.animation = 'pulse 1s ease-in-out infinite'
  window.removeEventListener('keydown', onKeyEscPress);

  if (!backdrop.classList.contains('is-hidden')) {
    backdrop.classList.toggle('is-hidden');
    modalInfo.innerHTML = "";
    return;
  };

  if (!footerModal.classList.contains('is-hidden')) {
    footerModal.classList.add('is-hidden');
  };

};

// Closes modal window at the click of a button
function onCloseModal() {
  onChangeModal();
};
// Closes modal window on press "Escape"
function onKeyEscPress(e) {
  if (e.code === "Escape") {
    onChangeModal();
  };
};
// Closes modal window at the click of a "Overlay"
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onChangeModal();
  };
};

