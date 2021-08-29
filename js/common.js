const menuButton = document.querySelector(".nav__trigger");
const menuMobile = document.querySelector(".nav__mobile");

menuButton.onclick = function(){
	menuButton.classList.toggle("active");
	menuMobile.classList.toggle("active");
}