import refs from "../refs/variables";

export default class fetchAPIservice {
    constructor() {
        this.API_KEY = refs.API_KEY;
        this.searchQuery = "";
        this.page = 1;
    };
    async fetchService() {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${this.searchQuery}&page=1&include_adult=false`;

        return await fetch(url)
        .then(response => response.json())
        .then(articles => {
            this.incrementPage();
            return articles
        })
    };

    incrementPage() {
        this.page += 1;
    };

    get query() {
        return this.searchQuery;
    };

    set query(newQuery) {
        this.searchQuery = newQuery;
    };

    resetPages() {
        this.page = 1;
    }
};

