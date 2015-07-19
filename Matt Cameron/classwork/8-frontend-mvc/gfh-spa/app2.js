_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var dish1 = new Dish({
			name: 'Sausage Roll',
			price: 23.99,
			store: 'Safeway',
			image_url: 'http://www.mediapeta.com/peta/Images/Main/Sections/blog/heckleberry_pie.jpg',
			likes: 3
	});

var dish2 = new Dish({
			name: 'Hamburger',
			price: 23.99,
			store: 'Safeway',
			image_url: 'http://www.mediapeta.com/peta/Images/Main/Sections/blog/heckleberry_pie.jpg',
			likes: 3
	});
var dish3 = new Dish({
			name: 'Salas',
			price: 23.99,
			store: 'Safeway',
			image_url: 'http://www.mediapeta.com/peta/Images/Main/Sections/blog/heckleberry_pie.jpg',
			likes: 3
	});

var lunch_menu = new Dishes([dish1, dish2, dish3]);


// ---------- DISPLAY DISHES ON LOAD -------

	// using ajax - not using a backbone collection

	// $.ajax({
	// 	url: 'http://localhost:3000/dishes',
	// 	datatype: 'json',
	// 	method: 'get'
	// }).done(function(data) {

	// 	_.each(data, function(dish) {
	// 		var new_dishModel = new Dish(dish);
	// 		var new_dishItem = new DishView({model: new_dishModel})
	// 		new_dishItem.render();
	// 		$('#container').append(new_dishItem.el);
	// 	});
	// })

var dinner_menu = new Dishes();
dinner_menu.fetch().done(function() {
	var all_dishes = dinner_menu.toJSON();

	_.each(all_dishes, function(dish){
		var new_dishModel = new Dish(dish);
		var new_dishItem = new DishView({model: new_dishModel});
		new_dishItem.render();
		$('#container').append(new_dishItem.el);
});

});




// display popup when button is clicked

$('#create-new-dish').on('click', function() {
	var modal = new DishModal()
		modal.render();
		$('body').prepend(modal.el);
});









