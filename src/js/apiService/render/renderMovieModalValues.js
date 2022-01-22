import movieDetailsTpl from '../../../templates/modal-movieDetails.hbs';
import refs  from '../../refs/variables';


const { modalInfo } = refs;

export default function rerenderMovieDetails(response) {
    modalInfo.insertAdjacentHTML('afterbegin', movieDetailsTpl(response));
    const modalWatchedButton = document.querySelector('.btn__watched')
    const modalQueueButton = document.querySelector('.btn__queue')
    modalWatchedButton.addEventListener('click', onClickWatchedButton)
    modalQueueButton.addEventListener('click', onClickQueueButton)
}



function onClickWatchedButton(e) {
    console.log('click Watched Button')
    const currentMovie = JSON.parse(localStorage.getItem('movie'))
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || []
    console.log(watchedMovies)
    watchedMovies.push(currentMovie)
    localStorage.setItem('watched', JSON.stringify(watchedMovies))
}

function onClickQueueButton(e) {
    console.log('click Queue Button')
    const currentMovie = JSON.parse(localStorage.getItem('movie'))
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || []
    console.log(queueMovies)
    queueMovies.push(currentMovie)
    localStorage.setItem('queue', JSON.stringify(queueMovies))
}