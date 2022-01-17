const refs = {
  buttonLib: document.querySelector('.btn'),
  libraryHeader: document.querySelector('.library-page'),
  mainHeader: document.querySelector('.section-header'),
  mainHome: document.querySelector('.main-home'),
  mainLibrary: document.querySelector('.main-library'),
  buttonWatched: document.querySelector('.watched'),
  buttonQueue: document.querySelector('.queue'),
  listWatched: document.querySelector('.watched-list'),
  listQueue: document.querySelector('.queue-list')
}

refs.buttonLib.addEventListener('click', libraryClickBtn);
refs.buttonQueue.addEventListener('click', onButtonQueueClick);
refs.buttonWatched.addEventListener('click', onButtonWatchedClick)

function libraryClickBtn(e) {
  e.preventDefault();
  refs.libraryHeader.classList.remove('hidden')
  refs.mainLibrary.classList.remove('hidden')
  refs.mainHeader.classList.add('hidden')
  refs.mainHome.classList.add('hidden') 
}

function onButtonQueueClick() {
  refs.listWatched.classList.add('hidden')
  refs.listQueue.classList.remove('hidden')
  refs.buttonWatched.classList.remove('is-active')
}
function onButtonWatchedClick() {
  refs.listQueue.classList.add('hidden')
  refs.listWatched.classList.remove('hidden')
}

export default libraryClickBtn