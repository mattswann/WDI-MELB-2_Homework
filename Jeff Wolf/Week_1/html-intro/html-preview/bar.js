//var userAge = prompt('your age?');
//var userAge;

//prompt("Whats your age?")




var title = document.getElementById('title');

//hey document can you get me the element with id 'btnEnter'.
var btnEnter = document.getElementById('btnEnter');
btnEnter.addEventListener('click', doSomething);

function doSomething() {

	var userAge = document.getElementById('userAge').value;
	console.log('userAge: ', userAge);

	if (userAge >= 18) {
	//console.log('drink away'); or below display
	title.innerHTML = 'drink away';
}	else {
	//console.log('boo hoo');
	title.innerHTML = 'boo hoo, your OUT sucker!';
}
}
/*
btnEnter.onclick = doSomething;
function doSomethingElse() {
	console.log('do something esle');
}
onclick has its drawback, stay with addEventListener....


*/