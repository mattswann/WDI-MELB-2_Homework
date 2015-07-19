require 'pry'

song_title = 'hello'
song_artist = 'lionel richie'
song_released = 1983

song = {
	'title' => 'hello',
	'artist' => 'lionel richie',
	'released' => 1983
}

# can also be written as

song = {
	:title => 'hello',
	:artist => 'lionel richie',
	:released => 1983
}

#or

song = {
	title: 'hello',
	artist:'lionel richie',
	released: 1983
}

### ^^^ the keys here are still a symbol, and need to be accessed like this:    song[:artist]

binding.pry