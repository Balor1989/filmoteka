const refs = {
      openModal: document.querySelector('#template'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      backdrop: document.querySelector('[data-modal]'),
    };
  
    refs.openModal.addEventListener('click', onOpenModal);
    refs.closeModalBtn.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);
  
    function onCloseModal() {
      refs.backdrop.classList.toggle('is-hidden');
      window.removeEventListener('keydown', onKeyEscPress);
    };

    function onOpenModal() {
      window.addEventListener('keydown', onKeyEscPress);
      refs.backdrop.classList.toggle('is-hidden');
      
    }
  
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
