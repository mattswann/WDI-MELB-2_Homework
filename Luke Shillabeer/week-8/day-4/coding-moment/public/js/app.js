console.log("testing");

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}

var Router = Backbone.Router.extend({
  routes: {
    "" : "root",
    "home" : "home",
    "about": "about",
    "foo/:bar": "foobar"
  },

  root: function() {
    $('#container > h1').html('Very Soft, Very Comfortable');
  },

  home: function() {
    $('#container > h1').html('Home.')
  },

  about: function() {
    var view = new AboutView();
    $('#container > h1').html(view.render().el);
  },

  foobar: function(bar) {
    $('#container > h1').html('Fizz' + bar);
  }
});

var AboutView = Backbone.View.extend({
  render: function() {
    this.$el.html("<h1>About</h1>");
    return this;
  },
});

var router = new Router();
Backbone.history.start();

$('span').on('click', function() {
  router.navigate('foo/bar', true);
});
