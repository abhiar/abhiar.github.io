/*
Linking welcome scren to main panel
*/

welcomeScreen = document.getElementById('welcome');
welcomeScreen.style.cursor = 'pointer';

welcomeScreen.onclick = function () {
  location.href = "#";
  location.href = "#main";
}

/*
Navigation Pane
*/

function turnOn(it) {
  elements.forEach(x => {
    if(x===it) {
      x.style.backgroundColor = '#394032';//'#8d99ae';
    }
    else {
      x.style.backgroundColor = '#79b791';
    }
  });
}

function updateNav() {
  let scrollVal = returnScroll();
  scalingFactor = 933/window.innerHeight;
  scrollVal *= scalingFactor;

  if(scrollVal < 925)
    navPane.style.left = '-3%';
  else
    navPane.style.left = '';

  if(scrollVal < 925)
    turnOn(l1);
  else if(scrollVal < 1842)
    turnOn(l2);
  else if(scrollVal < 2759)
    turnOn(l3);
  else if(scrollVal < 3125)
    turnOn(l4);
  else
    turnOn(l5);
}

function scrollToElement(event) {
  let target = panels[event.target.id.split('')[1]-1];
  if(target) {
    location.href = "#";
    location.href = panels[event.target.id.split('')[1]-1];
  }
}

const returnScroll = () => document.body.scrollTop;
let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let l3 = document.getElementById('l3');
let l4 = document.getElementById('l4');
let l5 = document.getElementById('l5');
let navPane = document.querySelector('nav');

elements = [l1, l2, l3, l4, l5];
panels = ['#welcome', '#main', '#panel2', '#panel3', '#panel4'];

setInterval(updateNav, 200);
navPane.onclick = scrollToElement;
