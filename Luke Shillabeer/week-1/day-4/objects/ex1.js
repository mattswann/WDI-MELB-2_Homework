/*
  The Recipe Card - Never forget another recipe!

  Create an object to hold information on your favorite recipe. It should
  have properties for title (a string), servings (a number), and ingredients
  (an array of strings).

  On separate lines (one console.log statement for each), log the recipe.

  https://gist.github.com/epoch/04ab1bc291a5f3ff79de
*/

var recipe = {
  title: "Banaoffee pie",
  serves: 4,
  ingredients: ["Granita biscuits", "butter", "bananas", "double-cream",
                "sweetened condensed milk", "brown sugar"],
}

Object.getOwnPropertyNames(recipe).forEach(function(prop){
  console.log(recipe[prop]);
});
