import activeRenderQueueMovies from './activeRenderQueueMovies';
import activeRenderWatchedMovies from './activeRenderWatchedMovies';
import pagination from '../plugins/tui-pagination';
import refs from '../refs/variables';

const { listWatched, listQueue, buttonLib, buttonQueue, buttonWatched,
  libraryHeader, mainHeader, mainLibrary, mainHome } = refs;


buttonLib.addEventListener('click', libraryClickBtn);
buttonQueue.addEventListener('click', onButtonQueueClick);
buttonWatched.addEventListener('click', onButtonWatchedClick);

function libraryClickBtn(e) {
  e.preventDefault();
  libraryHeader.classList.remove('hidden');
  mainLibrary.classList.remove('hidden');
  mainHeader.classList.add('hidden');
  mainHome.classList.add('hidden');

  activeRenderWatchedMovies();
  activeRenderQueueMovies();

  pagination.reset(0);  // Disable pagination
}

function onButtonQueueClick() {
  listWatched.classList.add('hidden');
  listQueue.classList.remove('hidden');
  buttonWatched.classList.remove('is-active');
  buttonQueue.classList.add('is-active');
};

function onButtonWatchedClick() {
  listQueue.classList.add('hidden');
  listWatched.classList.remove('hidden');
  buttonQueue.classList.remove('is-active');
  buttonWatched.classList.add('is-active');
};

export default libraryClickBtn;

