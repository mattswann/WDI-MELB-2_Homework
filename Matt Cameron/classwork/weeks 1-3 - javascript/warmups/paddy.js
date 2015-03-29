
function askQuestion() {
	var q = question.value;
	if (q === "Happy St Patrick's") {
		answer.innerHTML = "Tildlely de, potatoes";
	} else if (q === "Do you want a pint of Guinness?" && count === 0) {
		answer.innerHTML = "Come again?";
		count = 1;
	} else if (q === "DO YOU WANT A PINT OF GUINNESS?" && count === 1) {
		answer.innerHTML = "Just the luck of the Irish";
		count = 0;
	} else if (q === "Paddy, it's your round") {
		answer.innerHTML = "Look, Leprechaun!";
	} else {
		answer.innerHTML = "My da' was a potato farmer too. Good for you!";
	}
	question.value = "";
}


var count = 0;
var question = document.getElementById("question");
var button = document.getElementById("button");
button.addEventListener('click', askQuestion);
var answer = document.getElementById("answer");