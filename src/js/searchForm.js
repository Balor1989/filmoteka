import fetchService from './apiService/fetchAPIservice'

const searchForm = document.querySelector(".header-input");

const fetchAPI = new fetchService();

searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(event) {
    event.preventDefault();

    const valueSearch = event.currentTarget.elements.search.value;
    if (valueSearch === "") {
        return;
    } else {
       fetchAPI.query = valueSearch;
    };

    fetchAPI.resetPages();
    fetchAPI.fetchService()
        .then(articles => {
            searchForm.reset();
            console.log(articles);
    })
};
