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
