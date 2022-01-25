import movieDetailsTpl from '../../../templates/modal-movieDetails.hbs';
import refs from '../../refs/variables';
import onClickWatchedButton from '../../modal/onClickWatchedButton';
import onClickQueueButton from '../../modal/onClickQueueButton';
import onClickPlayButton from '../fetch/fetchMovieTrailer';



const { modalInfo } = refs;

// Renders detailed  information for the modal window.
export default function rerenderMovieDetails(response) {

    modalInfo.insertAdjacentHTML('afterbegin', movieDetailsTpl(response));

    const modalWatchedButton = document.querySelector('.btn__watched');
    const modalQueueButton = document.querySelector('.btn__queue');
    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
    const modalPlayButton = document.querySelector('.play_trailer');
    
    // Changes the button to "Remove from Watched" if the movie is already in the storage.
    if (watchedMovies.find(watchedMovie => watchedMovie.id === currentMovie.id)) {
        modalWatchedButton.classList.add('btn__watched--active');
    };
    
    // Changes the button to "Remove from Queue" if the movie is already in the storage.
    if (queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
        modalQueueButton.classList.add('btn__queue--active');
    };
    
    // Buttons handlers
    modalWatchedButton.addEventListener('click', onClickWatchedButton);
    modalQueueButton.addEventListener('click', onClickQueueButton);
    modalPlayButton.addEventListener('click', onClickPlayButton);
};

