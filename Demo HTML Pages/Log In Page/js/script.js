var menuButton = document.querySelector('#menu');
menu.addEventListener('click', menuButtonChange);



function menuButtonChange(e) {
  let x = e.target;
  if(!this.open){
    x.classList.add("change");
    menuOpen();
    this.open = true;
  } else {
    x.classList.remove("change");
    menuClose();
    this.open = false;
  }

}

function menuOpen() {
  var menuBackground = document.querySelector('#menuBackground');
  menuBackground.style.width = '220px';
  document.querySelector('.linkMenu').style.opacity = 1;
}

function menuClose() {
  var menuBackground = document.querySelector('#menuBackground');
  menuBackground.style.width = '50px';
  document.querySelector('.linkMenu').style.opacity = 0;
}
