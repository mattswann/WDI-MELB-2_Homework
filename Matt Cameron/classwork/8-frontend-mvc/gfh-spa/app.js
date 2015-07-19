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
		var showLikes = new LikesView({model: this.model.toJSON() });
		showLikes.render();
		this.$el.find('.image').append(showLikes.el);
	},
	hideLikes: function() {
		$('.likes').remove()
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

// show 'create new dish' button on load
var new_dish = new CreateNewDish()



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

			//add the new dish to LocalStorage
			dishes = JSON.parse(localStorage.getItem('dishes'));
			dishes.push (newDishDetails);
			localStorage.setItem('dishes', JSON.stringify(dishes));
		}
	}
});



// ------------- LIKES ----------------
var LikesView = Backbone.View.extend({
	render: function() {
		var template = _.template( $('#likes-template').html() );
		this.$el.html( template(this.model));
	},
	events: {
		"click": "itemClicked"
	},
	itemClicked: function() {
		this.model.likes += 1;
		this.updateLocalStorage(this.model.name, this.model.likes);
		this.render();
	},
	updateLocalStorage: function(name, likes) {
		// get all dishes from localStorage
		dishes = JSON.parse(localStorage.getItem('dishes'));

		// update this dish's likes
		for (var i in dishes) {
     if (dishes[i].name == name) {
        dishes[i].likes = likes;
     }

    //save back to localStorage
    localStorage.setItem('dishes', JSON.stringify(dishes));
   }
	}
});



// ---------- DISPLAY DISHES ON LOAD -------

// get dishes from localStorage
if (localStorage.getItem('dishes')) {
	dishes = JSON.parse(localStorage.getItem('dishes'));

	_.each(dishes, function(dish) {
		var new_dishModel = new Dish(dish);
		var new_dishItem = new DishView({model: new_dishModel})
		new_dishItem.render();
		$('#container').append(new_dishItem.el);
	})
} else {  // set dishes to blank if it doesn't exist
	localStorage.setItem('dishes', JSON.stringify([]))
};





