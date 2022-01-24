import refs from '../refs/variables';
import movieLibraryCard from '../../templates/movieLibraryCard.hbs';
import renderLibraryMovies from '../apiService/render/renderLibraryMovies';

const { listWatched } = refs;

// Renders a list of watched movies from the storage to the "library" page.
function activeRenderWatchedMovies() {

  const watchedMovies = JSON.parse(localStorage.getItem('watched'));
    const renderWatchedMovies = renderLibraryMovies(watchedMovies).map(movieLibraryCard).join('');
    
    listWatched.innerHTML = "";
    
  listWatched.insertAdjacentHTML('afterbegin', renderWatchedMovies);
};

export default activeRenderWatchedMovies;