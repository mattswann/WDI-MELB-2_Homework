$(document).ready(function(){

  function newTask(task) {
    var todayDate = new Date();
    $('#tasks').append($('<li>').text(task + " - " + todayDate));
  }

  // hijack form submit action
  $('form').on("submit", function(){
    event.preventDefault();
    newTask($('body > form > input[type="text"]').val());
  });

  $('#tasks').on('click', 'li', function(){
    // select list id=completed
    var clickedItem = $(this).addClass("strike-through");
    $('#completed').append(clickedItem);
    console.log("test")
  });

});
