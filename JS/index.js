const  menu_icon  =document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

menu_icon.onclick = function(){
    sidebar.classList.toggle("small-width");
    
}