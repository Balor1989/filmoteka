const refs = {
    // Key variable
    API_KEY: '7f7f3cc03c05575ccb98184b93174d1e',

    // YouTube path variable
    TRAILER__PATH: 'https://www.youtube.com/embed/',

    // Main render variable
    rootEl: document.querySelector('.filmlist'),

    // Pagination variables
    container: document.getElementById('pagination'),
    paginationBox: document.querySelector('.pagination-box'),

    // Modal variables
    modalInfo: document.querySelector('.modal__detail'),
    onModalWatchedBtn: document.querySelector('.btn__watched'),
    onModalQueueBtn: document.querySelector('.btn__queue'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    footerOpenModalBtn: document.querySelector(".footer-box_line"),
    footerModal: document.querySelector(".overlay"),
    backdrop: document.querySelector('[data-modal]'),
    footerCloseModalBtn: document.querySelector('.close_modal_window'),
    openModal: document.querySelector('.filmlist'),
    openWatchedList: document.querySelector('.watched-list'),
    openQueueList: document.querySelector('.queue-list'),
    footerBoxIcon: document.querySelector('.footer-box_icon'),
    
    //Sarch form variables
    btnSearch: document.querySelector('.button'),
    inputName: document.querySelector('.input'),

    // Library variables
    listWatched: document.querySelector('.watched-list'),
    libraryHomeButton: document.querySelector('.home-library-link'),
    listQueue: document.querySelector('.queue-list'),
    buttonLib: document.querySelector('.btn'),
    libraryHeader: document.querySelector('.library-page'),
    mainHeader: document.querySelector('.section-header'),
    mainHome: document.querySelector('.main-home'),
    mainLibrary: document.querySelector('.main-library'),
    buttonWatched: document.querySelector('.watched'),
    buttonQueue: document.querySelector('.queue'),

    // Theme variables
    bodyColor: document.querySelector('body'),
    themeBtn: document.querySelector('.theme_btn'),
    colorModal: document.querySelector('.modal'),
    colorFooter: document.querySelector('.footer'),
    frontendCard: document.querySelectorAll('.review-section_card'),
    colorPageBt: document.querySelectorAll('.tui-page-bt'),
    libraryThemeButon:document.querySelector('.library-button')
};

export default refs;