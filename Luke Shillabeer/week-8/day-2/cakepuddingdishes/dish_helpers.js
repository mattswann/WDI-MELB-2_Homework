function random_name(){
  first_words = ["tomato", "fish", "carrot", "banana", "cola", "pineapple"];
  second_words = ["cake", "pudding", "stew", "slice", "toastie", "bread"];

  return _.sample(first_words) + " " + _.sample(second_words);
}

function random_image(){
  return "img/" + String(_.sample([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])) + ".gif";
}
