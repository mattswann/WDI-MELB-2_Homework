function doSomething() {
	var userAge = parseInt(document.getElementById("userAge").value);
	var title = document.getElementById("title");
	
	if(userAge >= 18){
		title.innerHTML="Drink like no tomorrow";
		document.body.style.background = "white";
		document.body.style.color = "black";
	} else {
		title.innerHTML="Come back when you are above 17";
		document.body.style.background = "red";
		document.body.style.color = "white";
	}
}

var btnEnter = document.getElementById("btnEnter");
btnEnter.addEventListener('click', doSomething);