
let page = 1;
let keY = '7f7f3cc03c05575ccb98184b93174d1e';

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

function render(){
    //renderMovie
}
