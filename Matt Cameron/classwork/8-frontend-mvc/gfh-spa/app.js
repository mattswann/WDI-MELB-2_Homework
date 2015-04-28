_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};


// --------- DISHES --------------
var dishes = [{
	name: 'Chocolate Cake',
	price: 24.99,
	store: "Brodam's Cakes",
	image_url: 'http://www.taste.com.au/images/recipes/sfi/2011/08/27867_l.jpg',
	likes: 0
	},
	{	name: 'Cookies',
		price: 6.50,
		store: "Safeway",
		image_url: 'http://www.chicagonow.com/fitness-at-home/files/2011/08/chocolate_cookies.jpg',
	likes: 8
	}];

var defaultDish = {
	name: 'New Dish',
	price: 99.99,
	store: 'Store ABC',
	image_url: 'http://placehold.it/300x250',
	likes: 0
}


var DishView = Backbone.View.extend({
	className: 'dish',
	render: function() {
		var template = _.template( $('#dish-template').html() );
		this.$el.html(template(this.model));
	},
	events: {
		'mouseenter': 'showLikes',
		'mouseleave': 'hideLikes'
	},
	showLikes: function() {
		var showLikes = new LikesView({model: this.model})
		showLikes.render();
		this.$el.find('.image').append(showLikes.el);
	},
	hideLikes: function() {
		$('.likes').remove()
	}
});

// display each dish
_.each(dishes, function(dish) {
	var view = new DishView({model: dish});
	view.render();
	$('#container').append(view.el)
})

// ----------- DISH MODAL ------------------

var DishModal = Backbone.View.extend({
	render: function() {
		var htmlMaker = _.template( $('#new-dish-template').html() );
		this.$el.html(htmlMaker() );
	},
	events: {
		'click #modal': 'closeModal',
		'click #modal-container': 'dontCloseModal',
		'click #new-dish-btn': 'createDish'
	},
	closeModal: function() {
		$('#modal').remove();
	},
	dontCloseModal: function(event) {
		event.stopPropagation();
	},
	createDish: function() {
		var newDishDetails = {
			name: $('#dish_name').val(),
			price: $('#dish_price').val(),
			store: $('#dish_store').val(),
			image_url: $('#dish_image_url').val(),
			likes: 0
		}
		if (newDishDetails.name != "") {
			var new_dish = new DishView({model: newDishDetails });
			new_dish.render();
			$('#modal').remove();
			$('#container').append(new_dish.el)
		}
	}
});


// ----------- CREATE NEW DISH -------------

var CreateNewDish = Backbone.View.extend({
	el: '#create-new-dish',
	events: {
		'click': 'formModal',
	},
	formModal: function() {
		var modal = new DishModal()
		modal.render();
		$('body').prepend(modal.el);
	}
});

var new_dish = new CreateNewDish()



// ------------- LIKES ----------------
var LikesView = Backbone.View.extend({
	render: function() {
		var template = _.template( $('#likes-template').html() );
		this.$el.html( template(this.model) );
	},
	events: {
		"click": "itemClicked"
	},
	itemClicked: function() {
		this.model.likes += 1;
		this.render();
	}
});





