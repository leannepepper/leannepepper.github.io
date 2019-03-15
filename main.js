const line1=document.querySelector('.line1'); 
const line2=document.querySelector('.line2');
const line3= document.querySelector('.line3');
const hamContainer = document.querySelector('.ham-container'); 
const nav = document.querySelector('.nav');
const menuUl = document.querySelector(".menu-ul"); 
const main = document.querySelector(".all-content");


function openMenu() {
  menuUl.style.width = "150px";
  main.style.marginTop = "150px";
}
function closeMenu() {
  menuUl.style.width = "0";
  main.style.marginTop = "0";
}

hamContainer.addEventListener('click', function(){
  line1.classList.toggle("transition-line1");
  line2.classList.toggle("transition-line2");
  line3.classList.toggle("transition-line3");
  hamContainer.classList.toggle("ham-up");
  menuUl.classList.toggle("width-add"); 
  main.classList.toggle("margin-add");


});