require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'


get '/' do
  erb :index
end
    
get '/movie' do

  

    url = "http://www.omdbapi.com/?t=#{params[:movie_name]}"
    @omdb = HTTParty.get(url)

    # unless params[:movie_input].nil? || params[:movie_input].empty?


    @title = @omdb['Title']
    @genre = @omdb['Genre']
    @runtime = @omdb['Runtime']
    @poster = @omdb['Poster']
  # end


  erb :movie

end