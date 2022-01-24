import refs from '../refs/variables';
import movieLibraryCard from '../../templates/movieLibraryCard.hbs';
import renderLibraryMovies from '../apiService/render/renderLibraryMovies';

const { listQueue } = refs;

// Renders a list of queue movies from the storage to the "library" page.
function activeRenderQueueMovies() {

  const queueMovies = JSON.parse(localStorage.getItem('queue'));
  const renderQueueMovies = renderLibraryMovies(queueMovies).map(movieLibraryCard).join('');
    
  listQueue.innerHTML = "";
    
  listQueue.insertAdjacentHTML('afterbegin', renderQueueMovies);
};

export default activeRenderQueueMovies;