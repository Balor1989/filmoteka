import fetchMoviesDetails from "../js/apiService/modal-fetchMovieDetails";


const refs = {
  openModal: document.querySelector('.filmlist'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
};

let id = null
refs.openModal.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal(e) {
  
  window.addEventListener('keydown', onKeyEscPress);
  if (e.target.nodeName === 'UL')  {
    return;
  } else {
    refs.backdrop.classList.toggle('is-hidden');
    id = e.target.closest('.photo-card').getAttribute('id')
    console.log(id)
    
    fetchMoviesDetails(id);
  }
}

function onCloseModal() {
  refs.backdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', onKeyEscPress);
  // window.location.reload()

};

function onKeyEscPress(e) {
  if (e.keyCode === 27) {
    refs.backdrop.classList.toggle('is-hidden');
    window.removeEventListener('keydown', onKeyEscPress);
  }
}

function onBackdropClick(e) {
  if(e.target === e.currentTarget){
    refs.backdrop.classList.toggle('is-hidden');
    window.removeEventListener('keydown', onKeyEscPress);   
  }
}

