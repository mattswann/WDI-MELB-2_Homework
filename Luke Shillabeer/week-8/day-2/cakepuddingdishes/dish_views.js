
var DishStarsView = Backbone.View.extend({
  tagName: 'span',
  template: "<img src='img/star.png' class='rating'>",
  events: {
    'click':'delete_star'
  },
  initialize: function(options) {
    this.options = options || {};
  },

  delete_star: function(){
    this.$el.remove();
    this.options.view.trigger("star_delete");
  },
  render: function(){
    this.$el.html(this.template);
  }
});

var DishItemView = Backbone.View.extend({
  className: "dish-item",
  template: _.template($("#dish-item-template").html()),
  events: {
    "click .dish-item-text": "add_star",
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this, 'star_delete', this.delete_star);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    for (var i = 0; i < this.model.get('stars'); i++) {
      dish_stars = new DishStarsView({class: 'stars', view: this});
      dish_stars.render();
      this.$el.find('.stars').append(dish_stars.el);
    }
  },
  add_star: function(){
    this.model.add_star();
  },
  delete_star: function(){
    this.model.delete_star();
  }
});

var DishListView = Backbone.View.extend({
  id: 'container',
  render: function(){
    this.$el.empty();
    this.collection.each(function(dish){
      var dish_view = new DishItemView({model: dish});
      dish_view.render();
      this.$el.append(dish_view.el);
    }, this);
  },
});
