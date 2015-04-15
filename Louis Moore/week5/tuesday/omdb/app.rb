require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg' #postgres db
require 'pry'
require 'uri'


get '/' do
  erb :index #, :layout => false
end

get '/about' do
  erb :about
end
    
get '/movie' do
    
    #using :movie_name symbol is optional, you can also do 'movie_name'
    #sinatra gives you the option to use symbols
    #the only difference between the two is the amount of characters to write, and symbols are nice to read 
    url = "http://www.omdbapi.com/?t=#{params[:movie_name]}"
  

    db = PG.connect(:dbname => 'omdb')
    rows = db.exec("SELECT * FROM movies WHERE Title = '#{params[:movie_name]}'")

    #check database first
    #if movie already exists, then fetch from my database, else fetch from omdb
        
    if rows.count > 0 #!rows.empty? #if rows is not empty, movie must exist in our database
      #we  use 'raise to raise an error if true: raise 'found in database'
      @result = rows.first

    else
      # else fetch from omdb
      #URI fixes invalid urls with crazy punctuation chars / spaces
      raw_result = HTTParty.get(URI.escape(url))
      @result = {}
      raw_result.each do |key, value|
        @result[key.downcase] = value
      end

      #save to database

      #the SQL code that is declared when visiting the /movie page
      sql = "INSERT INTO  movies (Title, Year, Poster, Genre, Runtime) VALUES (
        '#{ @result['title'] }', 
        '#{ @result['year'] }', 
        '#{ @result['poster'] }',
        '#{ @result['genre'] }',
        '#{ @result['runtime'] }'
        );"
      #first connect to database
      db = PG.connect(:dbname => 'omdb')
      #pass in SQL we want to run
      db.exec(sql)

    end
  #close the database connection 
  db.close

  erb :movie
end
