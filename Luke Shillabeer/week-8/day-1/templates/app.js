var profiles = [
  {
    username: "KatyPezza", 
    img_url: "http://cp91279.biography.com/1000509261001/1000509261001_2051017820001_Bio-Biography-Katy-Perry-SF.jpg",
    blurb: "Hi I'm Katy Perry and I love to write code that lights my hair up blue and stuff. Also I like API's."
  },
  {
    username: "Phil",
    img_url: "http://img4.wikia.nocookie.net/__cb20110911114021/spongebob/images/e/e2/Squidward_Design_2.jpg",
    blurb: "I suppose this is alright. I am Phil the Squidward.",
  },
  {
    username: "lol more data",
    img_url: "http://i3.kym-cdn.com/entries/icons/original/000/004/815/lol-guy.jpg",
    blurb: "LOOOOOOOOOOOOOOOOOOOOOL."
  },
  {
    username: "Madison Flannery",
    img_url: "http://i3.kym-cdn.com/entries/icons/original/000/004/815/lol-guy.jpg",
    blurb: "LOOOOOOOOOOOOOOOOOOOOOL."
  }
];

var profileItem = _.template($("#profile-id-template").html())

_.each(profiles, function(profile) {
  $("#container").append(profileItem(profile));
  console.log(profile.username);
});
