import activeRenderQueueMovies from './activeRenderQueueMovies';
import activeRenderWatchedMovies from './activeRenderWatchedMovies';
import refs from '../refs/variables';

const { listWatched, listQueue, buttonLib, buttonQueue, buttonWatched,
  libraryHeader, mainHeader, mainLibrary, mainHome, paginationBox, libraryHomeButton } = refs;


libraryHomeButton.addEventListener('click',onClickHomeButton )
buttonLib.addEventListener('click', libraryClickBtn);
buttonQueue.addEventListener('click', onButtonQueueClick);
buttonWatched.addEventListener('click', onButtonWatchedClick);

function onClickHomeButton(e) {
e.preventDefault();

  paginationBox.style.visibility = 'visible';
  paginationBox.style.height = '190px';
  libraryHeader.classList.add('hidden');
  mainLibrary.classList.add('hidden');
  mainHeader.classList.remove('hidden');
  mainHome.classList.remove('hidden');

};

function libraryClickBtn(e) {
  e.preventDefault();

  paginationBox.style.visibility = 'hidden';
  paginationBox.style.height = '0';
  libraryHeader.classList.remove('hidden');
  mainLibrary.classList.remove('hidden');
  mainHeader.classList.add('hidden');
  mainHome.classList.add('hidden');

  activeRenderWatchedMovies();
  activeRenderQueueMovies();

};


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

