import libraryTpl from '../templates/library.hbs';

const refs = {
    library: document.querySelector('.body'),
  buttonLib: document.querySelector('.btn')
}

refs.buttonLib.addEventListener('click', libraryClickBtn);

function libraryClickBtn(e) {
  e.preventDefault();
  refs.library.innerHTML = ("afterbegin", libraryTpl())
}
export default libraryClickBtn