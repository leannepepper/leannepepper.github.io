const line1=document.querySelector('.line1'); 
const line2=document.querySelector('.line2');
const line3= document.querySelector('.line3');
const hamContainer = document.querySelector('.ham-container'); 
const nav = document.querySelector('.nav');
const menu = document.createElement("div"); 
const html = ` 
<ul class="menu-ul">
  <li><a href="#work">Recent Work</a></li> 
  <li><a href="#experience">Experience</a></li> 
  <li><a href="#about">About</a></li> 
  <li><a href="#contact">Contact</a></li>
</ul>
`; 


function createDropMenu() {
  menu.innerHTML = html; 
  nav.appendChild(menu);
}

hamContainer.addEventListener('click', function(){
  line1.classList.toggle("transition-line1");
  line2.classList.toggle("transition-line2");
  line3.classList.toggle("transition-line3");

  if(menu.innerHTML === ""){
    createDropMenu();
  }
  else if(menu.innerHTML === html) {
    menu.innerHTML = "";
  }

})