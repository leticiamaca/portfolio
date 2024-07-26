let menu = document.getElementById("menu");
let menuMobile = document.querySelector(".menu")
let menuFechado = document.getElementById('menu-fechado');
let menuAberto = document.getElementById("menu-aberto");

const abrirFecharMenu = () => {
if (menu.classList.contains('menu-fechado')){
    menu.classList.remove('menu-fechado')
    menuAberto.style.display = "none"
    menuFechado.style.display = "inline"
    menuMobile.style.display = "none"
}else{
    menu.classList.add('menu-fechado')
    menuFechado.style.display = "none"
    menuAberto.style.display = "inline"
    menuMobile.style.display = "inline-flex"
}
}