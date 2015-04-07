# https://gist.github.com/epoch/6a7ac3bce7684984d527

require 'sinatra'
require 'sinatra/reloader'
require 'httParty'


get '/' do
	erb :index
end

get '/about' do
	erb :about
end

get '/movie/:title' do
	erb :title
end