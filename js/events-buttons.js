const list_top_bar = document.getElementById("bars");
const close_list_menu_btn = document.getElementById("close-list-menu")
const glass_container = document.getElementById("glass-container")

// event listener
list_top_bar.addEventListener("click", open_list_menu)
close_list_menu_btn.addEventListener("click", close_list_menu)
glass_container.addEventListener("click", close_list_menu)


// funçoes
function open_list_menu(){
    const menu_top_bar = document.getElementById("menu-top-bar")
    menu_top_bar.style.left = "0"
    menu_top_bar.style.pointerEvents = "all"
    menu_top_bar.style.opacity = "100"
}

function close_list_menu(){
    const menu_top_bar = document.getElementById("menu-top-bar")
    menu_top_bar.style.left = "-200px"
    menu_top_bar.style.pointerEvents = "none"
    menu_top_bar.style.opacity = "0"
}