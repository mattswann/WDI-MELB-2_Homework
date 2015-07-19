function add_stuff (array) {
  return array.reduce(function(prev, cur){
    return prev + parseInt(cur);
  }, 0);
}

var args = process.argv.slice(2,process.argv.length)
console.log(add_stuff(args));
