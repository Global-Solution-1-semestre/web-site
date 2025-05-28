const list_top_bar = document.getElementById("bars");
const theme_top_bar = document.getElementById("theme-button")
const close_list_menu_btn = document.getElementById("close-list-menu")
const glass_container = document.getElementById("glass-container")
const theme_popup = document.getElementById("theme-menu");
const menu_top_bar = document.getElementById("menu-top-bar")
let isThemeOn = false

// event listener
window.addEventListener('click', function(event) {
    let isClosed = event.target.closest('#theme-menu')
  if (!isClosed && isThemeOn) {
    theme_popup.style.display = "none";
  }
})
list_top_bar.addEventListener("click", open_list_menu)
close_list_menu_btn.addEventListener("click", close_list_menu)
glass_container.addEventListener("click", close_list_menu)
theme_top_bar.addEventListener("click", open_theme_popup)


function open_list_menu(){
    menu_top_bar.style.left = "0"
    menu_top_bar.style.pointerEvents = "all"
    menu_top_bar.style.opacity = "100"
}

function close_list_menu(){
    menu_top_bar.style.left = "-200px"
    menu_top_bar.style.pointerEvents = "none"
    menu_top_bar.style.opacity = "0"
}

function open_theme_popup(){
  setTimeout( () => {
    theme_popup.style.display = "block";
    isThemeOn = true
  },5)
}