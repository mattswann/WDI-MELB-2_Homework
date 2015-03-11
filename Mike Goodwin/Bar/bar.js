enter.addEventListener('click', doThis);

function doThis () {
	var title = document.getElementById('title');
	var input = document.getElementById('userAge');
	var userAge = parseInt(input.value);

	if (userAge >= 18) {
		title.innerHTML = "Fill ya boots!";
	} else {
		title.innerHTML = "Get outta here junior!";
	}
}
