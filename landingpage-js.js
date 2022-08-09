var menu = document.querySelector(".mobile-menu")
var navList = document.querySelector("#nav-list")
menu.addEventListener("click", event => {
  if(navList.classList.contains('active')){
    navList.classList.remove('active')
  }else{
    navList.classList.add('active')
  navList.style.transition ='transform 0.3s ease-in'
  }
})