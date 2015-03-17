function checkAge() {
	var userAge = document.getElementById('userAge').value;
		if (userAge >= 18) {
			title.innerHTML = "Welcome to the bar, drink up!";
	} else {
			title.innerHTML = "You're too young, get lost!";
	}
}

var button = document.getElementById('btnClick');
var btnClick = button.addEventListener('click', checkAge);
var title = document.getElementById('title');

