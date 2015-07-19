var Dish = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/dishes',
  defaults: {
    name: "idno",
    blurb: "Some text that will be filled later",
    img_url: random_image(),
    stars: 0,
  },
  add_star: function(){
    if (this.get('stars') < 5) {
      this.set({stars: this.get('stars') + 1})
    }
  },
  delete_star: function(){
    if (this.get('stars') > 0) {
      this.set({stars: this.get('stars') - 1});
    }
  }
});
