btnEnter = document.getElementById('btnEnter');

btnEnter.addEventListener('click', function(){

  // create image stuff
  var image = new Image();
  var imageDiv = document.getElementById('imageShots');
  image.src = 'http://media.giphy.com/media/evtjHQhlpEXBK/giphy.gif'

  // rest of the variables
  var age = parseInt(document.getElementById("inputBox").value);
  var title = document.getElementById("title");

  // logic to determine whether to change the heading/show image
  if (age >= 18) {
    title.innerHTML = "shots shot shots shot shot shots";
    imageDiv.appendChild(image);
  }
  else {
    title.innerHTML = "No shots :(";
    imageDiv.innerHTML = "";
  }
});
