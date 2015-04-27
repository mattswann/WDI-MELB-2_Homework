degree = 0
function rotate(elem) {    
  $(elem).css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
  $(elem).css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
  timer = setTimeout(function() {
      ++degree; rotate(elem);
  },5);
}


_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g 
}

var profiles = [
  {
    username: "Mike", 
    img_url: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/8/005/0a9/37a/239f2d8.jpg",
    blurb: "Hi I'm Katy Perry and I love to write code that lights my hair up blue and stuff. Also I like API's.",
    projects: "<li>Card thing</li><li>Book Thingy</li>",
  },
  {
    username: "Phil",
    img_url: "http://img4.wikia.nocookie.net/__cb20110911114021/spongebob/images/e/e2/Squidward_Design_2.jpg",
    blurb: "I suppose this is alright. I am Phil the Squidward.",
    projects: "<li>Dating App</li><li>Memory Castle</li>",
  },
  {
    username: "JC", 
    img_url: "http://www.tecnigen.com/wp-content/uploads/2014/06/Angry-Birds-Wallpaper-HD.png",
    blurb: "Angry Birds. Wat Da Crap!",
    projects: "<li>Angry Birds</li><li>Angry Birds</li>",
  },
  {
    username: "Madison Flannery",
    img_url: "http://i3.kym-cdn.com/entries/icons/original/000/004/815/lol-guy.jpg",
    blurb: "I'm not even IN THE COURSE HEHEHEHEHEHEHEHEHHEHEHEHE",
    projects: "<li>more than I hsould have done in a lifetime</li>"
  }
];

var profileItem = _.template($("#profile-id-template").html())

_.each(profiles, function(profile) {
  $("#container").append(profileItem(profile));
  console.log(profile.username);
});

$('.profile-item').click(function(){
  rotate(this);
});
