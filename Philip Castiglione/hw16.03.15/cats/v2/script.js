var boats = [];
var goTimer;
var delayMs = 40;
var addButton = document.getElementById("addButton");
addButton.addEventListener('click', newBoat);
var goButton = document.getElementById("goButton");
goButton.addEventListener('click', allBoatsGo);
var stopButton = document.getElementById("stopButton");
stopButton.addEventListener('click', allBoatsStop);
var speedButton = document.getElementById("speedButton");
speedButton.addEventListener('click', toggleSpeed);

function newBoat() {
  var numBoats = boats.length;
  
  var imgInsert = document.createElement('img');
  imgInsert.src = "boat.jpg";
  imgInsert.id = 'img'+(numBoats+1)
  document.body.insertBefore(imgInsert, document.getElementById("placeholder"));

  var boat = {
    direction: Math.floor(Math.random() * 360),
    left_position: Math.floor(Math.random() * (window.innerWidth - 100)),
    top_position: Math.floor(Math.random() * (window.innerHeight - 100)),
    left_chance: Math.floor(Math.random() * 40 +11),
    right_chance: Math.floor(Math.random() * 40 +11),
    img_height: 100,
    img_width: 100,
  }
  boat.HTMLobject = document.getElementById('img'+(boats.length+1));
  boat.HTMLobject.className = "show";
  boat.HTMLobject.style.left = boat.left_position + 'px';
  boat.HTMLobject.style.top = boat.top_position + 'px';
  boats.push(boat);
}

function moveBoat(boatIdx) {
  var currentDirection = boats[boatIdx].direction;
  var compass;
  if (currentDirection < 22.5) {compass = 's';
  } else if (currentDirection < 67.5) {compass = 'sw';
  } else if (currentDirection < 112.5) {compass = 'w';
  } else if (currentDirection < 157.5) {compass = 'nw';
  } else if (currentDirection < 202.5) {compass = 'n';
  } else if (currentDirection < 247.5) {compass = 'ne';
  } else if (currentDirection < 292.5) {compass = 'e';
  } else if (currentDirection < 337.5) {compass = 'se';
  } else if (currentDirection < 360) {compass = 's';
  }

  function pixelChange(position, direction) {
    var objPosition = position +'_position';
    boats[boatIdx][objPosition] += direction;
    boats[boatIdx].HTMLobject.style[position] = boats[boatIdx][objPosition] + 'px';
  }

  switch (compass) {
    case 's':
      pixelChange('top',1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(0deg)';
      break;
    case 'sw':
      pixelChange('left',-1);
      pixelChange('top',1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(45deg)';
      break;
    case 'w':
      pixelChange('left',-1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(90deg)';
      break;
    case 'nw':
      pixelChange('left',-1);
      pixelChange('top',-1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(135deg)';
      break;
    case 'n':
      pixelChange('top',-1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(180deg)';
      break;
    case 'ne':
      pixelChange('left',1);
      pixelChange('top',-1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(225deg)';
      break;
    case 'e':
      pixelChange('left',1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(270deg)';
      break;
    case 'se':
      pixelChange('left',1);
      pixelChange('top',1);
      boats[boatIdx].HTMLobject.style.transform = 'rotate(315deg)';
      break;
    default:
      return;
  }
}

function changeDirection(boatIdx) {
  var currentDirection = boats[boatIdx].direction;
  var rand = Math.floor(Math.random() * 100) + 1;
  var moveLeft = boats[boatIdx].left_chance;
  var moveRight = boats[boatIdx].right_chance;

  if (rand <= moveLeft) {
    currentDirection--;
  } else if (rand >= (100-moveRight)) {
    currentDirection++;
  }
  if (currentDirection === -1) {
    currentDirection = 359;
  } else if (currentDirection === 360) {
    currentDirection = 0;
  }
  boats[boatIdx].direction = currentDirection;
}

function boatExplode(boatOneIdx, boatTwoIdx) {
  boats[boatOneIdx].HTMLobject.src = "explosion.gif";
  boats[boatOneIdx].HTMLobject.style.height = "100px";
  boats[boatOneIdx].HTMLobject.style.width = "100px";
  boats[boatTwoIdx].HTMLobject.src = "explosion.gif";
  boats[boatTwoIdx].HTMLobject.style.height = "100px";
  boats[boatTwoIdx].HTMLobject.style.width = "100px";
  // either splice out of boats array, or some other way stop them moving
  setTimeout(hideBoats, 8000);
  function hideBoats() {
    boats[boatOneIdx].HTMLobject.className = "hide";
    boats[boatTwoIdx].HTMLobject.className = "hide";
  }
}

function detectCollision() {

}

function detectScreenEdge(boatIdx) {
  var northEdge = 0;
  var westEdge = 0;
  var southEdge = window.innerHeight;
  var eastEdge = window.innerWidth;

  var currentTop = boats[boatIdx].top_position;
  var currentLeft = boats[boatIdx].left_position;
  var currentBottom = boats[boatIdx].top_position + boats[boatIdx].img_height;
  var currentRight = boats[boatIdx].left_position + boats[boatIdx].img_width;

  if (currentTop <= northEdge) {
    boats[boatIdx].direction = 0;
  }
   if (currentLeft <= westEdge) {
    boats[boatIdx].direction = 269;
  }
   if (currentBottom >= southEdge) {
    boats[boatIdx].direction = 179;
  }
   if (currentRight >= eastEdge) {
    boats[boatIdx].direction = 89;
  } 
}

function allBoatsGo() {
  if (goTimer||boats.length===0) {
    return;
  }

  function eachBoatGo(){
    for (i=0;i<boats.length;i++){
      moveBoat(i);
      changeDirection(i);
      detectScreenEdge(i);
    }
  }

  goTimer = setInterval(eachBoatGo,delayMs)
}

function allBoatsStop() {
  if (!goTimer) {
    return;
  }
  clearInterval(goTimer);
  goTimer = '';
}

function toggleSpeed() {
  var speedDiv = document.getElementById('speedDiv');
  if (delayMs <= 0) {
    delayMs = 40;
    speedDiv.innerHTML = '+';
  } else {
    delayMs -= 10;
    speedDiv.innerHTML += '+';
  }
  allBoatsStop();
  allBoatsGo();
}

// finish functions explode and collision
// correct bouncing and explosions by getting square images with transparancy
// add background when square images with transparency
