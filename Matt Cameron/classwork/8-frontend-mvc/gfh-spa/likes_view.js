
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
