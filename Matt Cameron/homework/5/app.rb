# https://gist.github.com/epoch/6a7ac3bce7684984d527

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'
require 'URI'

get '/' do
	@search_for = params[:title]
	erb :index
end

get '/about' do
	erb :about
end

get '/movie' do

	#check if the movie is already in our database
	check_existing = run_sql("SELECT * FROM movies WHERE title = '#{params['title']}'")

	#if the movie is already in our database, set @movie from our database
 	if check_existing.count > 0
 		 @rows = run_sql("SELECT * FROM movies WHERE title = '#{ params[:title] }' ")
 		 @movie = @rows[0]
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
			sql = "INSERT INTO movies (title, poster, rated, runtime, year, languages, imdbrating, director, plot, actors) VALUES ('#{ escape_apostrophes(@movie['title']) }', '#{ @movie['poster'] }', '#{ @movie['rated'] }', '#{ @movie['runtime'] }', '#{ @movie['year'] }', '#{ @movie['language'] }', '#{ @movie['imdbrating'] }', '#{ escape_apostrophes(@movie['director']) }', '#{ escape_apostrophes(@movie['plot']) }', '#{ escape_apostrophes(@movie['actors'])}')"
			run_sql(sql)

			#show the movie page
			erb :title

		#if movie does not match exactly, show the fuzzy search results
		else
			@results = HTTParty.get("http://www.omdbapi.com/?s=#{params['title'] }&plot=full")['Search']
			erb :results
		end
 	end
end

def run_sql(sql)
	db = PG.connect(:dbname => 'mmdb')
  @rows = db.exec(sql)
  db.close
  return @rows
end

def escape_apostrophes(string)
	string.gsub("'", "''")
end