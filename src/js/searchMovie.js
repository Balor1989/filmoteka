import movieCard from '../templates/movieCard.hbs'
import { genres } from './apiService/fetchGenresOfMovie';

let page = 1;
let keY = '7f7f3cc03c05575ccb98184b93174d1e';

const refs = {
    cardConteiner: document.querySelector('.filmlist')
}

const btnSearch = document.querySelector('.button');

btnSearch.addEventListener('click', searchName)

function searchName(e) {
    e.preventDefault();
    const inputName = document.querySelector('.input').value;
    fetchResalt()
        .then(render)
        .catch(error => console.log(error));
    
        function fetchResalt() {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keY}&query=${inputName}&page=1`)
        .then(response =>{
            return response.json();
        },
        )
    }   
}

function render(cards){
    console.log(cards.results)
    const data = cards.results
    const movies = data.map(
            (movie) => {
                const { release_date, poster_path, genre_ids } = movie
                let genresID = genre_ids
                if (genresID.length > 2) {
                     genresID.splice(2, 5, "other")
                }
                let genresOfMovie = genresID.map(id => id==="other" ? 'Other' : genres[id]).join(', ');
                return {
                    ...movie,
                    release_date:release_date.slice(0, 4),
                    img: poster_path,
                    genre_ids: genresOfMovie
                };
         }
        )
    const markup = movies.map(movieCard).join('')
    refs.cardConteiner.innerHTML = markup;
}
