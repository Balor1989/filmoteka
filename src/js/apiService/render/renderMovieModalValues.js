import movieDetailsTpl from '../../../templates/modal-movieDetails.hbs';
import { activeRenderQueueMovies, activeRenderWatchedMovies } from '../../library';
import refs  from '../../refs/variables';


const { modalInfo } = refs;

// Renders detailed  information for the modal window.
export default function rerenderMovieDetails(response) {

    modalInfo.insertAdjacentHTML('afterbegin', movieDetailsTpl(response));

    const modalWatchedButton = document.querySelector('.btn__watched');
    const modalQueueButton = document.querySelector('.btn__queue');
    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];

    if (watchedMovies.find(watchedMovie => watchedMovie.id === currentMovie.id)) {
        modalWatchedButton.classList.add('btn__watched--active');
    };

    if (queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
        modalQueueButton.classList.add('btn__queue--active');
    };
    
    //Handlers
    modalWatchedButton.addEventListener('click', onClickWatchedButton);
    modalQueueButton.addEventListener('click', onClickQueueButton);
};



function onClickWatchedButton(e) {

    this.classList.toggle('btn__watched--active');

    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];

    if (watchedMovies.find(watchedMovie => watchedMovie.id === currentMovie.id)) {
        
        localStorage.setItem('watched', JSON.stringify(watchedMovies.filter(watchedMovie => watchedMovie.id !== currentMovie.id)));

        activeRenderWatchedMovies();

        return;
    }
    
    watchedMovies.push(currentMovie);

    localStorage.setItem('watched', JSON.stringify(watchedMovies));

    activeRenderWatchedMovies();
}



function onClickQueueButton(e) {

    this.classList.toggle('btn__queue--active');

    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
 

    if (queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
        
        localStorage.setItem('queue', JSON.stringify(queueMovies.filter(queueMovie => queueMovie.id !== currentMovie.id)));

        activeRenderQueueMovies();

        return;
    }
    queueMovies.push(currentMovie);

    localStorage.setItem('queue', JSON.stringify(queueMovies));

    activeRenderQueueMovies();
}