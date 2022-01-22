import movieDetailsTpl from '../../../templates/modal-movieDetails.hbs';
import refs  from '../../refs/variables';


const { modalInfo } = refs;

export default function rerenderMovieDetails(response) {
    modalInfo.insertAdjacentHTML('afterbegin', movieDetailsTpl(response));

    const modalWatchedButton = document.querySelector('.btn__watched');
    const modalQueueButton = document.querySelector('.btn__queue');
     
    modalWatchedButton.addEventListener('click', onClickWatchedButton);
    modalQueueButton.addEventListener('click', onClickQueueButton);
}



function onClickWatchedButton(e) {
    console.log('click Watched Button')
    const modalWatchedButton = document.querySelector('.btn__watched')
    modalWatchedButton.classList.toggle('btn__watched--active')

    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];

     

    if (watchedMovies.find(watchedMovie => watchedMovie.id === currentMovie.id)) {
        
        localStorage.setItem('watched', JSON.stringify(watchedMovies.filter(watchedMovie => watchedMovie.id !== currentMovie.id)));
        return;
    }
    
    watchedMovies.push(currentMovie);

    localStorage.setItem('watched', JSON.stringify(watchedMovies));
}



function onClickQueueButton(e) {
    console.log('click Queue Button');

    const modalQueueButton = document.querySelector('.btn__queue');
    modalQueueButton.classList.toggle('btn__queue--active')

    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
 

    if (queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
        
        localStorage.setItem('queue', JSON.stringify(queueMovies.filter(queueMovie => queueMovie.id !== currentMovie.id)));
        return;
    }

    queueMovies.push(currentMovie);

    localStorage.setItem('queue', JSON.stringify(queueMovies));
}