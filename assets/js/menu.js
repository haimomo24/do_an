//  menu bars 

const btnMenu = document.querySelector(".menu-bars");
const closeMenu =document.querySelector(".close");
const menu = document.querySelector(".menu ");



// bắt sự kiên click 

btnMenu.addEventListener("click",() => {
    menu.style.left = "0";
});

closeMenu.addEventListener("click",() =>{
    menu.style.left = "-100%";
})