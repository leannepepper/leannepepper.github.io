var line1=document.querySelector('.line1'); 
var line2=document.querySelector('.line2');
var line3= document.querySelector('.line3');
var hamContainer = document.querySelector('.ham-container'); 

hamContainer.addEventListener('click', function(){
  line1.classList.toggle("transition-line1");
  line2.classList.toggle("transition-line2");
  line3.classList.toggle("transition-line3");
})