var dish = {
  title: "Beerz Muffinz",
  starCount: 22,
};

var Dish = Backbone.Model.extend({
});

var DishItemView = Backbone.View.extend({
  events: {
    "click .star": "addStar"
  },

  initialize: function {

  },

  addStar: function {
    var count = this.model.get("starCount") + 1;
    this.model.set('starCount', count);
  },

  render: function {
    var htmlMaker = _.template( $('dish-item-template').html() );
    var html = htmlMaker(this.model.toJSON());
    this.$el.html(html);
  }
});
