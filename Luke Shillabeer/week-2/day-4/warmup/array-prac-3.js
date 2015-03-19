// Part 3

function traverseList(list, name) {

  if (typeof list === 'undefined') {
   return name + " || ";
  }
  var attrName = list[0];
  var attrVal  = list[1][0];
  var result = traverseList(list[1][1], name);
  return result + (attrName + ": " + attrVal + " || ");
}

var pokemons = [
  ["Squirtle",["HP",[44,["Attack",[48,["Defense",[65,["Speed",[43]]]]]]]]],
  ["Snorlax",["HP",[160,["Attack",[110,["Defense",[65,["Speed",[30]]]]]]]]],
  ["Mew",["HP",[100,["Attack",[100,["Defense",[100,["Speed",[100]]]]]]]]]
];

for (var idx in pokemons) {
  var pokemon = pokemons[idx];
  var pokeName = pokemon[0];
  var pokeAttr = pokemon[1];
  console.log(traverseList(pokeAttr, pokeName));
}
