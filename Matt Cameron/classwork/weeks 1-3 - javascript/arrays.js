var hari = ["hari", 50, "sananab"];
var tony = ["tony", 17, "regal"];
var mck = ["mckenneth",9001,"jazz"];
var will = ["will", 186, "knits"];

var arr =	[
  ["hari", 50, "sananab"],
  ["tony", 17, "regal"],
  ["mckenneth",9001,"poop"],
  ["will", 186, "knits"]
];

var pokemon = [
  ["Squirtle",["HP",[44,["Attack",[48,["Defense",[65,["Speed",[43]]]]]]]]],
  ["Snorlax",["HP",[160,["Attack",[110,["Defense",[65,["Speed",[30]]]]]]]]],
  ["Mew",["HP",[100,["Attack",[100,["Defense",[100,["Speed",[100]]]]]]]]]
]

function printNice(arr) {
	console.log("Name: " + arr[0].toUpperCase());
	console.log("Age: " + arr[1]);
	console.log("Favourite Word: " + reverse(arr[2]));
	console.log("");
}

function reverse(s){
    return s.split("").reverse().join("");
}

function showPokemon(arr) {
	var poke = _.flatten(arr);
	console.log(poke[0] + " || " + poke[1] + ": " + poke[2] + " || " + poke[3] + ": " + poke[4] + " || " + poke[5] + ": " + poke[6] + " || " + poke[7] + ": " + poke[8]);
}

/*console.log("PART 1");

hari.shift();
console.log(hari);

tony[1]++;
console.log(tony);

mck.push("swag");
console.log(mck);

will.pop();
console.log(will);

console.log("PART 2");

_.each(arr, printNice);*/

console.log("PART 3");

_.each(pokemon, showPokemon);

