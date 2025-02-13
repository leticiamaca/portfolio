let abrir = document.getElementById("btn_menu");
let menu = document.getElementById("mobile_menu")
let overlay = document.querySelector('.overlay-menu')

abrir.addEventListener('click', () => {
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click' , () =>{
  menu.classList.remove('abrir-menu')
})

window.addEventListener("scroll", () => {
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 0)
})