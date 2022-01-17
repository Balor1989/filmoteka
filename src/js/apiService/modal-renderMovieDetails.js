import movieDetailsTpl from '../../templates/modal-movieDetails.hbs';
import refs  from '../refs/variables';

const { modalInfo } = refs;

export default function rerenderMovieDetails(response) {
    modalInfo.innerHTML= ""
    modalInfo.insertAdjacentHTML('beforeend',movieDetailsTpl(response));
}