_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};


var AboutView = Backbone.View.extend({
	// el: '#main_header',
	tagName: 'h1',
	render: function() {
		this.$el.html("About");
		return this;
	}
});

var HomeView = Backbone.View.extend({
	// el: '#main_header',
	tagName: 'h1',
	render: function() {
		this.$el.html("Home")
		return this;
	}
});




var Router = Backbone.Router.extend({
	routes: {
		"home": "home",
		"about": "about",
		"foo/:bar": "foobar"
	},
	home: function() {
		var view = new HomeView();
		$('#main_header').html(view.render().el)
	},
	about: function() {
		var view = new AboutView();
		$('#main_header').html(view.render().el);
	},
	foobar: function(bar) {
		console.log('foo/bar ' + bar)
	}
});


var router = new Router();
Backbone.history.start();

$('#menu span').on('click', function() {
	router.navigate('foo/bar', true);
})