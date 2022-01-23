import fetchMoviesDetails from "../apiService/fetch/fetchMovieModalValues";
import refs  from '../refs/variables';


const { modalInfo, openModal, closeModalBtn, footerOpenModalBtn, footerModal,
  backdrop, footerCloseModalBtn, openWatchedList, openQueueList } = refs;

 
// Hendlers
openModal.addEventListener('click', onOpenModal);
openWatchedList.addEventListener('click', onOpenModal);
openQueueList.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick);
footerModal.addEventListener('click', onBackdropClick);
footerOpenModalBtn.addEventListener('click', onOpenModal);
footerCloseModalBtn.addEventListener('click', onCloseModal);


function onOpenModal(e) {
  document.body.style.overflow = "hidden";
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


function onChangeModal() {
  document.body.style.overflow = "";
  localStorage.removeItem('movie');
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

