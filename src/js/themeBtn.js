const bodyColor = document.querySelector('body')
const themeBtn = document.querySelector('.theme_btn');
themeBtn.addEventListener('click', changeTheme);

function changeTheme() {
    if(bodyColor.classList.contains('theme_btn-dark') == false){
        bodyColor.classList.add('theme_btn-dark')
        document.querySelector('.theme_icon').classList.add('theme_icon-dark');
        const colorS = document.querySelector('h2').classList.add('color_white');
    }
    else if(bodyColor.classList.contains('theme_btn-dark') == true){
        bodyColor.classList.remove('theme_btn-dark')
        document.querySelector('.theme_icon').classList.remove('theme_icon-dark');
        document.querySelector('h2').classList.remove('color_white');
    }
}
