# https://gist.github.com/epoch/6a7ac3bce7684984d527

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'
require 'uri'


get '/' do
	@search_for = params[:title]
	erb :index
end

get '/about' do
	erb :about
end

get '/movie' do
	# normalise the input
	params['title'] = params['title'].capitalize

	# Get the entered movie from OMDB
	url = "http://www.omdbapi.com/?t=#{params['title']}&plot=full"
	@movie = HTTParty.get(URI.escape(url))

	# if movie exists in OMDB
	if @movie['Title'] == params['title']

		exists_already = run_sql("SELECT * FROM movies WHERE title = '#{params['title']}'")

		# if the movie is not already in our database, add it
		if exists_already.count == 0
			raw_result = HTTParty.get(URI.escape(url))
			@movie = {}
			raw_result.each do |key, value|
				@result[key.downcase] = value
			end

			sql = "INSERT INTO movies (title, poster, rated, runtime, year, languages, imdbrating, director, plot, actors) VALUES (
			'#{ escape_apostrophes @movie['Title'] }',
			 '#{ @movie['Poster'] }',
			 '#{ @movie['Rated'] }',
			 '#{ @movie['Runtime'] }',
			 '#{ @movie['Year'] }',
			 '#{ @movie['Language'] }',
			 '#{ @movie['imdbRating'] }',
			 '#{ escape_apostrophes @movie['Director'] }',
			 '#{ escape_apostrophes @movie['Plot'] }',
			 '#{ escape_apostrophes @movie['Actors']}'
			 )"
			run_sql(sql)

			#if the movie is already in our database, set @movie from our database
	 	else
	 		sql = "SELECT * FROM movies WHERE title = '#{ params['title'] }' "
	 		 @rows = run_sql(sql)
	 		 @movie = @rows[0]
	 	end
	 	erb :title

	 	# if the movie doesn't exist on OMDB, do a fuzzy search and display the results
	else
		@results = HTTParty.get("http://www.omdbapi.com/?s=#{params['title'] }&plot=full")['Search']
		erb :results
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