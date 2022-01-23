import movieLibraryCard from '../templates/movieLibraryCard.hbs'
import renderLibraryMovies from './apiService/render/renderLibraryMovies';

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
  const watchedMovies = JSON.parse(localStorage.getItem('watched'));
  const queueMovies = JSON.parse(localStorage.getItem('queue'));

  const renderWatchedMovies = renderLibraryMovies(watchedMovies).map(movieLibraryCard).join('');
  const renderQueueMovies = renderLibraryMovies(queueMovies).map(movieLibraryCard).join('');

  refs.listWatched.insertAdjacentHTML('afterbegin', renderWatchedMovies)
  refs.listQueue.insertAdjacentHTML('afterbegin', renderQueueMovies)
}

function onButtonQueueClick() {
  refs.listWatched.classList.add('hidden')
  refs.listQueue.classList.remove('hidden')
  refs.buttonWatched.classList.remove('is-active')
  refs.buttonQueue.classList.add('is-active')
}
function onButtonWatchedClick() {
  refs.listQueue.classList.add('hidden')
  refs.listWatched.classList.remove('hidden')
  refs.buttonQueue.classList.remove('is-active')
  refs.buttonWatched.classList.add('is-active')
}

export default libraryClickBtn