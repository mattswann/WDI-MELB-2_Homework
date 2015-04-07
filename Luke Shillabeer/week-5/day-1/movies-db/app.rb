require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :search
end

get '/search/:title' do
  @movie = HTTParty.get("http://www.omdbapi.com/?t=#{ params["title"] }&y=&plot=full&r=json")
  erb :movie
end

get '/about' do
  erb :about
end

post '/search' do
  title = params["title"].gsub(/\s/, '+')
  redirect to("/search/#{ title }")
end
