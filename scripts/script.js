const sideBar = document.querySelector('.sidebar');
const hamburgerMenu = document.querySelector('.ham-icon');
const closeBtn = document.querySelector('.close-icon')


hamburgerMenu.addEventListener('click', () => {
  sideBar.style.display = "initial";
})

closeBtn.addEventListener('click', () => {
  sideBar.style.display = "none";
})