$(document).ready(function() {
	var donuts = $('article h2').eq(0).html('I Inhale Donuts');
	console.log(donuts);

	var listItem = $('ul li').eq(-2).html('FOUR!');

	var hideMe = $('.inner').hide();


	/*var $newElement = $('<li><a href="#">FREE STUFF!</li>').addClass("menu-item");
	$('#nav').append($newElement);*/


	var $newElement = $('<li>', {
		class: 'menu-item',
		id: 'newIdName',
		style: 'background-colour: red'
	}).html('New List Item');

	$('#nav').append($newElement);
})

