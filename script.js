$.get('127.0.0.1:8080', success);
function success() {
  console.log('wohoo');
}

animating = 0
positions = [[320,180], [200,300], [90,150]]

homeButton = document.getElementById('homeNav')
opButton = document.getElementById('operationsNav')
aboutButton = document.getElementById('aboutNav')
moreButton = document.getElementById('moreNav')
homePanel = document.getElementById('home')
opPanel = document.getElementById('operations')
aboutPanel = document.getElementById('about')
morePanel = document.getElementById('more')
marker = document.getElementById('marker')

lastPanel = homePanel
lastButton = homeButton
homeButton.style.color = 'orange';

homeButton.addEventListener('click', dispHome)
opButton.addEventListener('click', dispOperations)
aboutButton.addEventListener('click', dispAbout)
moreButton.addEventListener('click', dispMore)

opPanel.style.display = 'none';
aboutPanel.style.display = 'none';
morePanel.style.display = 'none';
marker.style.opacity = 0;



sButtons = document.getElementsByClassName('button');
for(let i = 0; i < sButtons.length; i++) {
  sButtons[i].addEventListener('mouseover', moveMarker);
}
for(let i = 0; i < sButtons.length; i++) {
  sButtons[i].addEventListener('mouseout', resetMarker);
}

function moveMarker(e) {
  e.target.style.backgroundColor = '#803300';
  idx = e.target.dataset.sno;
  marker.style.marginTop = positions[idx][0];
  marker.style.marginLeft = positions[idx][1];
  flicker(marker);
}

function resetMarker(e) {
  e.target.style.backgroundColor = '#404040';
  marker.style.opacity = 0;
}


function dispHome(e) {
  lastButton.style.color = 'white';
  e.target.style.color = 'orange';
  animate(homePanel);
  lastPanel.style.display = 'none';
  homePanel.style.display = 'flex';
  lastPanel = homePanel;
  lastButton = e.target;
}

function dispOperations(e) {
  lastButton.style.color = 'white';
  e.target.style.color = 'orange';
  animate(opPanel);
  lastPanel.style.display = 'none';
  opPanel.style.display = 'flex';
  lastPanel = opPanel;
  lastButton = e.target;
}

function dispAbout(e) {
  lastButton.style.color = 'white';
  e.target.style.color = 'orange';
  animate(aboutPanel);
  lastPanel.style.display = 'none';
  aboutPanel.style.display = 'flex';
  lastPanel = aboutPanel;
  lastButton = e.target;
}

function dispMore(e) {
  lastButton.style.color = 'white';
  e.target.style.color = 'orange';
  animate(morePanel);
  lastPanel.style.display = 'none';
  morePanel.style.display = 'flex';
  lastPanel = morePanel;
  lastButton = e.target;
}



function max(a,b) {
  if (a>b) {
    return a;
  }
  else {
    return b;
  }
}

function animate(obj) {
  obj.style.transform = 'scale(0)';
  let id = setInterval(frame, 10);
  animating = 1;
  let i = 0
  let t = 0

  function frame() {
    t += 0.2;
    i = 1-Math.exp(-1*t)
    if (i >= 0.99) {
      clearInterval(id);
      obj.style.transform = 'scale(1)';
      animating = 0;
    } else {
      obj.style.transform = 'scale('+i+')';
    }
  }
}

function flicker(obj) {
  obj.style.opacity = 0.5;
  let id = setInterval(frame, 50);
  i = 0;
  function frame() {
    obj.style.opacity = 0;
    if (i == 1) {
      obj.style.opacity = 0.5;
      clearInterval(id);
    }
    console.log(i);
    if (i == 1) {
      i = 0;
    } else {
      i += 1;
    }
  }
}
