const refs = {
    API_KEY: '7f7f3cc03c05575ccb98184b93174d1e',
    rootEl: document.querySelector('.filmlist'),

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
    
    //Sarch form variables
    btnSearch: document.querySelector('.button'),
    inputName: document.querySelector('.input'),

    // Library variables
    listWatched: document.querySelector('.watched-list'),
    listQueue: document.querySelector('.queue-list'),
    buttonLib: document.querySelector('.btn'),
    libraryHeader: document.querySelector('.library-page'),
    mainHeader: document.querySelector('.section-header'),
    mainHome: document.querySelector('.main-home'),
    mainLibrary: document.querySelector('.main-library'),
    buttonWatched: document.querySelector('.watched'),
    buttonQueue: document.querySelector('.queue')
};

export default refs;