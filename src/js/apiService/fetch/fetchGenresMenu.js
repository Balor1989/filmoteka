
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from '../../refs/variables';
import render from "../../apiService/render/renderGenresMenu";


const  { renderGenresMenu, renderElements} = render;

const { API_KEY} = refs;

const dropdown = document.querySelector('.dropdown-content')

let page = "";

dropdown.addEventListener('click',  searchByGenre)

export default async function fetchGenresMenu() {
    try { fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(response => {return response.json()})
        .then( render.renderGenresMenu)
    } catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };
};




async function searchByGenre(e) {
    e.preventDefault()
    if (e.target.nodeName !== 'A') {return;}
    const genreID = e.target.dataset.sources;

    const objList = await fetchMovies(genreID);
    await render.renderElements(objList.results, genreID);

};
  
async function fetchMovies(genreID) {
    
    try {const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&api_key=${API_KEY}&page=${page}`);
    return response.json()
    } catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };
}   


