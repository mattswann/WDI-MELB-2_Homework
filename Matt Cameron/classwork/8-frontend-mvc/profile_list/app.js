_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var profiles = [
	{
		username: 'Miranda',
		blurp: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui soluta voluptate, illum, nulla reprehenderit adipisci dolorum blanditiis, quos porro magnam, mollitia nemo obcaecati quas incidunt ad. Distinctio deserunt iste vitae?',
		image_url: 'https://pbs.twimg.com/profile_images/1289557304/image002-2_400x400.jpg',
		age: 32,
		status: 'single',
	},
	{
		username: 'Beta',
		blurp: 'My name is Beta',
		image_url: 'http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/8/005/06d/30d/2881546.jpg',
		age: 32
	},
	{
		username: 'Phil',
		blurp: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware! I have mainly designed and built web applications in Ruby (including Ruby on Rails) and JavaScript (including standard libraries eg. jQuery, underscore.js) and have exposure to a number of other languages and frameworks.',
		image_url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xft1/v/t1.0-1/1485069_10203348533420930_470250524_n.jpg?oh=6086cc0750dd7a6747cf6b590bd7f30e&oe=55A0C026&__gda__=1439939413_7f032517658b8e58af58f4a8a67f1c06',
		age: 32
	},
	{
		username: 'DT',
		blurp: "Hey, I'm DT. I'm 104 years old, and love coding about cats",
		image_url: 'https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/1700/thumb_HEADSHOTS__2001_.jpg',
		age: 104
	},
	{
		username: 'Louis',
		blurp: 'I am an experienced web developer with exposure across the full-stack. My preferred technologies are Ruby on Rails and Javascript.',
		image_url: 'http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAM1AAAAJDUzOTZiMDdlLTgwZGQtNGUwOC1iMTFkLTIwMWM3ZDQzZmUxOQ.jpg',
		age: 32
	}]

// var profileItem = _.template($('#profile-item-tpl').html() );


// _.each(profiles, function(profile) {
// 	var html = profileItem(profile);
// 	$('#container').append(html);
// })


// $('.profile-item').on('click', function () {
// 	console.log("My name is " + $(this).find("h2").html())
// })


var ProfileItemView = Backbone.View.extend({
	events: {
		"click": "itemClicked"
	},
	itemClicked: function() {
		console.log('item clicked');
	},
	render: function() {
		var template = _.template($('#profile-item-tpl').html() );
		this.$el.html(template(this.model));
	}
});

_.each(profiles, function(profile) {
	var view = new ProfileItemView( {model: profile});
	view.render();
	$('#container').append(view.el)
})

var MenuView = Backbone.View.extend({
	el: '#menu',
	events: {
		'click': 'menuClick'
	},

	menuClick: function() {
		console.log('menu clicked');
	}
})

var menuView = new MenuView();

