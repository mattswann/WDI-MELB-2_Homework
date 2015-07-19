// this is bad and I feel bad
// I'd reimplement it as a function, but that would have taken time
Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}

function haversine_distance(loc1, loc2) {
  // Lots of this was blantently stolen from here
  // http://www.movable-type.co.uk/scripts/latlong.html
  var R = 6371000; // meters
  var chiOne = loc1.lat.toRad();
  var chiTwo = loc2.lat.toRad();
  var deltaChi = (loc2.lat-loc1.lat).toRad();
  var deltaSigma = (loc2.lng-loc1.lng).toRad();

  var a = Math.sin(deltaChi/2) * Math.sin(deltaChi/2) +
          Math.cos(chiOne) * Math.cos(chiTwo) *
          Math.sin(deltaSigma/2) * Math.sin(deltaSigma/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

function getting_close(locations, currentLocation) {

  var result = [];
  for (var i = 0; i < locations.length; i++) {
    
    var locOne = {
      lat: locations[i].location.lat,
      lng: locations[i].location.long,
    };

    var locTwo = {
      lat: currentLocation[0], 
      lng: currentLocation[1],
    };

    var dist_btwn = haversine_distance(locOne, locTwo);
    result.push({name: locations[i].name, dist: dist_btwn});
  }
  
  // http://stackoverflow.com/a/3524832/2355035
  return result.sort(function(a,b) {
    return a.dist - b.dist;
  });
}

var myResults = [ 
  {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
  {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
  {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
  {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
  {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
  {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}
];

// this result assumes I'm standing at the southern-most point
// of North Lake in Golden Gate Park, SF
console.log(getting_close(myResults, [37.768618, -122.501315]));
