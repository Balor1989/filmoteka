const bodyColor = document.querySelector('body')
const themeBtn = document.querySelector('.theme_btn');
const colorModal = document.querySelector('.modal');
const colorFooter = document.querySelector('.footer');
const frontendCard = document.querySelectorAll('.review-section_card');
const colorPageBt = document.querySelectorAll('.tui-page-bt');

themeBtn.addEventListener('click', changeTheme);

function changeTheme(){
    if(bodyColor.classList.contains('theme_btn-dark') == false) {
        changeThemeAdd()
    }
    else if(bodyColor.classList.contains('theme_btn-dark') == true) {
        changeThemeRemove()
        
    }
}

function changeThemeAdd() {
    bodyColor.classList.add('theme_btn-dark');
        document.querySelector('.theme_icon').classList.add('theme_icon-dark');
        colorModal.style.background = '#555353';
        colorFooter.style.background = '#2b2d30';
        document.querySelector('.modal_content').style.background = "#8f8f8f";
        for(const listFrontend of frontendCard) {
            listFrontend.style.background = "#afafaf";
        }
        for(const colorPage of colorPageBt) {
            colorPage.style.color = '#fff';
        }
        localStorage.setItem("theme","theme_btn-dark")
}

function changeThemeRemove() {
    bodyColor.classList.remove('theme_btn-dark');
    document.querySelector('.theme_icon').classList.remove('theme_icon-dark');
    colorModal.style.background = '#fff';
    colorFooter.style.background = '#f7f7f7';
    document.querySelector('.modal_content').style.background = "#fff";
    for(const listFrontend of frontendCard) {
        listFrontend.style.background = "#fff";
    }
    for(const colorPage of colorPageBt) {
        colorPage.style.color = '#000';
    }
    localStorage.setItem("theme", "whiteTheme")
}

const blackTh = (localStorage.getItem("theme"))   
const whiteTh = JSON.parse(localStorage.getItem("whiteTheme"))
        
window.onload = loc;
function loc() {
    if(localStorage.getItem("theme") == "theme_btn-dark"){
        changeThemeAdd()
    }
    else if (localStorage.getItem("theme") == "whiteTheme"){
        changeThemeRemove()
    }
}
