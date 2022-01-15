const modal = document.getElementById("my_modal");
const btn = document.querySelector(".footer-box_line");
const span = document.getElementsByClassName("close_modal_window")[0];
const burger = document.querySelector('.burger');

    btn.onclick = function () {
      modal.style.display = "block";
    }

    span.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
     
}


btn.addEventListener('click', openModal)
  
function openModal() {
  console.log("click to footer btn")
}