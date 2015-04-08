require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require 'httparty'
require 'uri'

get '/' do
  recent_searches_sql = "SELECT * FROM movies
                         WHERE poster_url NOT LIKE 'N/A' 
                         ORDER BY id DESC 
                         LIMIT 5;"
  @recent_five = run_sql(recent_searches_sql)
  erb :search
end

get '/search/:title' do
  url = "http://www.omdbapi.com/?t=#{ params["title"] }&y=&plot=full&r=json"
  @movie = HTTParty.get(URI.escape(url))
  if @movie['Response'] == "False"
    redirect to('/')
  end
  add_movie = "INSERT INTO movies (title, year, rated, runtime, genre, director, actors, description, poster_url)
               VALUES ('#{ @movie['Title'].gsub("'","''") }', '#{ @movie['Year'].gsub("'","''").to_i }', '#{ @movie['Rated'].gsub("'","''") }', '#{ @movie['Runtime'].gsub("'","''").to_i }', '#{ @movie['Genre'].gsub("'","''") }', '#{ @movie['Director'].gsub("'","''") }', '#{ @movie['Actors'].gsub("'","''") }', '#{ @movie['Plot'].gsub("'","''") }', '#{ @movie['Poster'].gsub("'","''") }');"
  run_sql(add_movie)
  erb :movie
end

get '/about' do
  erb :about
end

get '/history' do
  recent_searches_sql = "SELECT * FROM movies 
                         ORDER BY id DESC 
                         LIMIT 50;"
  @recent_five = run_sql(recent_searches_sql)                      
  erb :history
end

post '/search' do
  title = params["title"].gsub(/\s/, '+')
  redirect to("/search/#{ title }")
end

def run_sql(sql)
  db = PG.connect(:dbname => 'moviedb')
  rows = db.exec(sql)
  db.close
  return rows
end
