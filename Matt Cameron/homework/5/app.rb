# https://gist.github.com/epoch/6a7ac3bce7684984d527

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
	@search_for = params[:title]
	erb :index
end

get '/about' do
	erb :about
end

get '/movie' do
	@movie = HTTParty.get("http://www.omdbapi.com/?t=#{params['title']}&plot=full")

	if @movie['Response'] == "True"
	 erb :title
	else
		erb :error
	end
end
