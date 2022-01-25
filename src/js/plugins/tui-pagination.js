
import Pagination from 'tui-pagination';
import refs from '../refs/variables';

const { container } = refs;
const page = JSON.parse(localStorage.getItem('page')) || 1
const options = { // below default value of options
    totalItems: 20000,
     itemsPerPage: 20,
     visiblePages: 5,
     page: page,
     centerAlign: false,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-bt">{{page}}</a>',
         currentPage: '<strong class="tui-page-button tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-icon-{{type}}"></span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}"></span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btnn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
    }
};

const pagination = new Pagination(container, options);

export default pagination;


