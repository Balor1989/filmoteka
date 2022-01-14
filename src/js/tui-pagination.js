const Pagination = require('tui-pagination');
const container = document.getElementById('pagination');
const options = { // below default value of options
     totalItems: 1000,
     itemsPerPage: 1000,
     visiblePages: 1000,
     page: 1000,
     centerAlign: false,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
        
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};
const pagination = new Pagination(container, options);
paganation.on('afterMove', (event) => {
     const currentPage = event.page;
     console.log(currentPage);
});
paganation.on('beforeMove', (event) => {
    const currentPage = event.page;

    if (currentPage === 10) {
        return false;
        // return true;
    }
});
