import fetchMoviesDetails from "../apiService/fetch/fetchMovieModalValues";
import ref  from '../refs/variables';


const { modalInfo } = ref;
const refs = {
  modal: document.querySelector('.modal'),
  openModal: document.querySelector('.filmlist'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  footerModal: document.querySelector(".overlay"),
  footerOpenModalBtn: document.querySelector(".footer-box_line"),
  footerCloseModalBtn: document.querySelector('.close_modal_window'),
  openWatchedList: document.querySelector('.watched-list'),
  openQueueList: document.querySelector('.queue-list')
};
 
refs.openModal.addEventListener('click', onOpenModal);
refs.openWatchedList.addEventListener('click', onOpenModal);
refs.openQueueList.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.footerOpenModalBtn.addEventListener('click', onOpenModal);
refs.footerCloseModalBtn.addEventListener('click', onCloseModal);
// refs.modal.addEventListener('click',  onModalWatchedBtn);
// refs.modal.addEventListener('click',  onModalQueueBtn);


// function onModalWatchedBtn(e) {
//  const onModalWatchedBtn = e.target.closest('.btn__watched')
//  console.log(onModalWatchedBtn)
//   if (onModalWatchedBtn.textContent === "Add to watched") {
//     onModalWatchedBtn.innerHTML = "Remove from watched";
//     onModalWatchedBtn.style.backgroundColor = "rgb(255, 107, 1)";
//     onModalWatchedBtn.style.border = "none";
//   } else {
//     onModalWatchedBtn.innerHTML = "Add to watched";
//     onModalWatchedBtn.style.backgroundColor = "#FFFFFF";
//     onModalWatchedBtn.style.border = " 1px solid #000000";
  
// };
// }
// function onModalQueueBtn(e) {
//   const onModalQueueBtn = e.target.closest('.btn__queue')
//   console.log(onModalQueueBtn)
//   if (onModalQueueBtn.textContent === "Add to queue") {
//     onModalQueueBtn.innerHTML = "Remove from queue";
//     onModalQueueBtn.style.backgroundColor = "rgb(255, 107, 1)";
//     onModalQueueBtn.style.border = "none";
//   } else {
//     onModalQueueBtn.innerHTML  = "Add to queue";
//     onModalQueueBtn.style.backgroundColor = "#FFFFFF";
//     onModalQueueBtn.style.border = " 1px solid #000000";
//   }

// }


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
  }


function onChangeModal() {
  document.body.style.overflow = "";
  localStorage.removeItem('movie')
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

