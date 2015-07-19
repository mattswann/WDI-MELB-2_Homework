// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require_tree .

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};


// --------- DISHES --------------

var Dish = Backbone.Model.extend({

});

var DishView = Backbone.View.extend({
	initialize: function() {
  	this.listenTo(this.model, 'change', this.render() );
	},
	className: 'dish',
	render: function() {
		var template = _.template( $('#dish-template').html() );
		this.$el.html( template( this.model.toJSON() ) );
	},
	events: {
		'mouseenter': 'showLikes',
		'mouseleave': 'hideLikes'
	},
	showLikes: function() {
		var showLikes = new LikesView({model: this.model });
		showLikes.render();
		this.$el.find('.image').append(showLikes.el);
	},
	hideLikes: function() {
		$('.likes').remove()
	}
});


// ----------- DISH MODAL ------------------

var DishModal = Backbone.View.extend({
	render: function() {
		var htmlMaker = _.template( $('#new-dish-template').html() );
		this.$el.html( htmlMaker() );
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
		// extremely basic form validation
		if (newDishDetails.name != "") {

			//create a new Dish model object
			var dishModel = new Dish(newDishDetails)

			var new_dish = new DishView({model: dishModel });
			new_dish.render();
			$('#modal').remove();
			$('#container').append(new_dish.el)
		}
	}
});



// ------------- LIKES ----------------
var LikesView = Backbone.View.extend({
	render: function() {
		var template = _.template( $('#likes-template').html() );
		this.$el.html( template( this.model.toJSON() ));
	},
	events: {
		"click": "itemClicked"
	},
	itemClicked: function() {
		likes = this.model.get('likes');
		this.model.set({likes: likes + 1})
		this.render();
	}
});



// ---------- DISPLAY DISHES ON LOAD -------

	$.ajax({
		url: '/dishes',
		datatype: 'json',
		method: 'get'
	}).done(function(data) {
		_.each(data, function(dish) {
			var new_dishModel = new Dish(dish);
			var new_dishItem = new DishView({model: new_dishModel})
			new_dishItem.render();
			$('#container').append(new_dishItem.el);
		});
	})


// display popup when button is clicked

$('#create-new-dish').on('click', function() {
	var modal = new DishModal()
		modal.render();
		$('body').prepend(modal.el);
});
