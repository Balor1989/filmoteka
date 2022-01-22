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
}

function onClickQueueButton(e) {
    console.log('click Queue Button')
}