var movePixels = 10;
var delayMs = 50;
var catTimer = null;

 
function catWalk() {
    
    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left);
    var currentRight = parseInt(img.style.right);
    if (currentLeft < (window.innerWidth-img.width)) {
        console.log('travelling left to right');
        img.style.left = (currentLeft + movePixels) + 'px';
    }
    
    if (currentLeft > (window.innerWidth-img.width)) {
        img.style.right = '0px';
        console.log('right side reached');
        img.setAttribute('class', 'flip');  // flip the cat
        //img.style.left = 'auto';
        img.style.right = '0px';
        img.style.right = (currentRight + movePixels) + 'px';  // movement from right to left
    }

}


function startCatWalk() {
    catTimer = window.setInterval(catWalk, delayMs);
}


function fasterCat() {
    catTimer = window.setInterval(catWalk, 20);
}

function stopCatWalk() {
    clearInterval(catTimer)
}

var startBtn = document.getElementById('start-button');
var stopBtn = document.getElementById('stop-button');
var speedBtn = document.getElementById('speed-button');


startBtn.addEventListener('click', startCatWalk);
stopBtn.addEventListener('click', stopCatWalk);
speedBtn.addEventListener('click', fasterCat);