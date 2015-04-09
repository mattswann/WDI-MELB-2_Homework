# https://gist.github.com/epoch/6a7ac3bce7684984d527

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'
require 'URI'
require_relative 'config'
require_relative 'movie'

get '/' do
	@search_for = params[:title]
	erb :index
end

get '/about' do
	erb :about
end

get '/movie' do

	#check if the movie is already in our database
	movies = Movie.where title: params[:title]

	#if the movie is already in our database, set @movie from our database
 	if movies.count > 0
 		 @movie = movies.first
 		 erb :title

 	else   # Not in our database, so check if the movie exists in OMDB
 		url = "http://www.omdbapi.com/?t=#{params['title']}&plot=full"
		@movie = HTTParty.get(URI.escape(url))

		# if movie does match exactly
 	  if @movie['Title'] == params['title']

 	  	#downcase the response from OMDB to match the database (so we can use the same variables in templates)
 	  	raw_result = HTTParty.get(URI.escape(url))
			@movie = {}
			raw_result.each { |key, value| @movie[key.downcase] = value }

			# write the movie to our database

			new_dish = Movie.new
			new_dish.title = @movie['title']
			new_dish.poster = @movie['poster']
			new_dish.rated = @movie['rated']
			new_dish.runtime = @movie['runtime']
			new_dish.year = @movie['year']
			new_dish.languages = @movie['languages']
			new_dish.imdbrating = @movie['imdbrating']
			new_dish.director = @movie['director']
			new_dish.plot = @movie['plot']
			new_dish.actors = @movie['actors']
			new_dish.save

			#show the movie page
			erb :title

		#if movie does not match exactly, show the fuzzy search results
		else
			@results = HTTParty.get("http://www.omdbapi.com/?s=#{params['title'] }&plot=full")['Search']
			erb :results
		end
 	end
end