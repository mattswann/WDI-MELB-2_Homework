
require 'sinatra'
require 'httparty'

get '/' do
  @star_wars_data = HTTParty.get("http://swapi.co/api/people/1/")
  erb :index
end

get '/about' do
  erb :about
end



