import refs from '../refs/variables';

const { bodyColor, themeBtn, libraryThemeButon, colorModal, colorFooter, frontendCard, colorPageBt } = refs;

themeBtn.addEventListener('click', changeTheme); // Listener on button change themes
libraryThemeButon.addEventListener('click', changeTheme); // Listener on library button change themes

function changeTheme(){  // To add or remove topics by condition
    if(bodyColor.classList.contains('theme_btn-dark') == false) {
        changeThemeAdd();
    }

    else if(bodyColor.classList.contains('theme_btn-dark') == true) {
        changeThemeRemove();
        
    }
};


function changeThemeAdd() {  // Adding a dark theme
    bodyColor.classList.add('theme_btn-dark');
    document.querySelector('.theme_icon').classList.add('theme_icon-dark');
    document.querySelector('.library-theme-icon').classList.add('theme_icon-dark');

        colorModal.style.background = '#555353';
        colorFooter.style.background = '#2b2d30';
        document.querySelector('.modal_content').style.background = "#8f8f8f";
        
    for (const listFrontend of frontendCard) {
            listFrontend.style.background = "#afafaf";
    };
        for(const colorPage of colorPageBt) {
            colorPage.style.color = '#fff';
    };
    localStorage.setItem("theme", "theme_btn-dark"); // Saving topics in local storage
};

function changeThemeRemove() { // Remove a dark theme
    bodyColor.classList.remove('theme_btn-dark');
    document.querySelector('.theme_icon').classList.remove('theme_icon-dark');
    document.querySelector('.library-theme-icon').classList.remove('theme_icon-dark');
    colorModal.style.background = '#fff';
    colorFooter.style.background = '#f7f7f7';
    document.querySelector('.modal_content').style.background = "#fff";
    
    for (const listFrontend of frontendCard) {
        listFrontend.style.background = "#fff";
    };
    
    for (const colorPage of colorPageBt) {
        colorPage.style.color = '#000';
    };
    localStorage.setItem("theme", "whiteTheme"); // Saving topics in local storage
}

const blackTh = (localStorage.getItem("theme"));   
const whiteTh = JSON.parse(localStorage.getItem("whiteTheme"));
        
window.onload = loc;

// Checking local storage for saved themes, applying them when opening or reloading the page
function loc() {
    if(localStorage.getItem("theme") == "theme_btn-dark"){
        changeThemeAdd();
    }
    else if (localStorage.getItem("theme") == "whiteTheme"){
        changeThemeRemove();
    }
}
