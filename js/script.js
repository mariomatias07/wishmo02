const hamburger = document.querySelector(".hamburger-1");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click",() =>{
	
    navbar.classList.toggle("open");
})