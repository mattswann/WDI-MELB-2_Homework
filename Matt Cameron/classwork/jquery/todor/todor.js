function newTask(text) {
		var tasks = JSON.parse(localStorage.getItem('tasks'));
		tasks.push(text);
		localStorage.setItem('tasks', JSON.stringify(tasks));

		var $tasks = $('#tasks');
		var $newTask = $('<li>').html(text);
		$tasks.append($newTask);

	}

$(document).ready(function() {

	if (!localStorage.getItem('tasks')) { localStorage.setItem('tasks', JSON.stringify([]) ); };
	if (!localStorage.getItem('doneTasks')) { localStorage.setItem('doneTasks', JSON.stringify([]) ); };


	var tasks = JSON.parse(localStorage.getItem('tasks'));
	var doneTasks = JSON.parse(localStorage.getItem('doneTasks'));

	$.each(tasks, function(index, element) {
		var $tasks = $('#tasks');
		var $newTask = $('<li>').html(element);
		$('#tasks').append($newTask);
	});

		$.each(doneTasks, function(index, element) {
		var $doneTasks = $('#doneTasks');
		var $newTask = $('<li>').html(element);
		$('#completed').append($newTask);

	});

	$('form').on('submit', function(event) {
		event.preventDefault();

		var $newTask = $('form input');
		newTask($newTask.val());
		$newTask.val('');
	});


	// event delegation
	$('#tasks').on('click', 'li', function() {

		// move to completed ul
		$('#completed').append(this);


		var currentTask = this.innerHTML;

		// add to doneTasks in localStorage
		var completedTasks = JSON.parse(localStorage.getItem('doneTasks'));
		completedTasks.push(currentTask);
		localStorage.setItem('doneTasks', JSON.stringify(completedTasks));

		// remove from tasks in localStorage
		var toDos = JSON.parse(localStorage.getItem('tasks'));
		var idx = toDos.indexOf(currentTask);
		toDos.splice(idx, 1);
		localStorage.setItem('tasks', JSON.stringify(toDos));
	})

});



