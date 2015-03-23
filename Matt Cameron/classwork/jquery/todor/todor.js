function newTask(text) {
		var $tasks = $('#tasks');
		var $newTask = $('<li>').html(text);
		$tasks.append($newTask);

	}

$(document).ready(function() {


	$('form').on('submit', function(event) {
		event.preventDefault();

		var $newTask = $('form input');
		newTask($newTask.val());
		$newTask.val('');
	});


	// event delegation
	$('ul').on('click', 'li', function() {
		$(this).toggleClass('done');
		$('#completed').append(this);
	})

});



