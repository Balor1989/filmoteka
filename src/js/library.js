import movieLibraryCard from '../templates/movieLibraryCard.hbs'
import renderLibraryMovies from './apiService/render/renderLibraryMovies';
import pagination from './plugins/tui-pagination';

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

  activeRenderWatchedMovies();
  activeRenderQueueMovies()

     // Disable pagination
    pagination.reset(0);
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



export function activeRenderQueueMovies() {
  const queueMovies = JSON.parse(localStorage.getItem('queue'));
  const renderQueueMovies = renderLibraryMovies(queueMovies).map(movieLibraryCard).join('');
  refs.listQueue.innerHTML = "";
  refs.listQueue.insertAdjacentHTML('afterbegin', renderQueueMovies)
};

export function activeRenderWatchedMovies() {
  const watchedMovies = JSON.parse(localStorage.getItem('watched'));
  const renderWatchedMovies = renderLibraryMovies(watchedMovies).map(movieLibraryCard).join('');
  refs.listWatched.innerHTML = "";
   refs.listWatched.insertAdjacentHTML('afterbegin', renderWatchedMovies)
};