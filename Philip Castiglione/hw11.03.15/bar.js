var clickCounter = 0;
var ageBtn = document.getElementById('ageButton');

ageBtn.addEventListener('click', ageCheck);

function ageCheck(){
  clickCounter++;
  var clicksContent = document.getElementById('clickBox');
  clicksContent.innerHTML = clickCounter;

  var age = document.getElementById('ageInput').value;
  var result = document.getElementById('responsePara');

  age = parseInt(age, 10);

  if (Number.isNaN(age)) {
    result.innerHTML = "Please enter a number";
  } else if (age >= 18) {
    result.innerHTML = 'PARTY WOO! <img src="http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8.jpg">';
  } else if (age < 18) {
    result.innerHTML = "DON'T EVEN THINK ABOUT IT";
  } else {
    console.log("something gone srsly wrong with the user input parsing yo")
  }
}