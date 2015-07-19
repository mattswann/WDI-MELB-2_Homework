//// VANILLA JAVASCRIPT

// var request = new XMLHttpRequest();

// request.onreadystatechange = function () {
// 	// console.log('readyState has changed');
// 	// console.log('readyState', this.readyState);
// 	// console.log('responseText', this.responseText);

// 	if (this.readyState === 4) {
// 		console.log('Done');
// 		document.write( this.responseText);
// 	}
// };

// request.open('GET', '/api/students');
// request.send();

// console.log('AJAX request is probably still running')




// JQUERY

$(document).ready(function () {

	$.getJSON('/api/students').done(function(data) {
		console.log(data.name);
	});

});


// alternate jQuery layout
	// function doSomething(data) {
	// 	console.log(data.name)
	// };

	// var page = $.getJSON('/api/students');

	// doSomething(page);