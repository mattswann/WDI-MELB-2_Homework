var dishCollection = new DishCollection();
var dishListView = new DishListView({collection: dishCollection});

dishCollection.fetch().done(function(){
  dishListView.render();
  $("#content").replaceWith(dishListView.el);
});

$('#new-dish').click(function(){
  var dish = new Dish({
    name: random_name(),
    img_url: random_image(),
  });
  
  dishCollection.add(dish);
  dishListView.render();
  $("#content").replaceWith(dishListView.el);
});
