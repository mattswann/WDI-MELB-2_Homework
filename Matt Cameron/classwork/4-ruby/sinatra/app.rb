require 'pry'
require 'sinatra'
require 'sinatra/contrib/all'

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

get '/contact' do
	erb :contact
end


# sinatra dynamic route
get '/hello/:name' do
	"hello there #{params['name']}"
end

get '/multiply/:num1/:num2' do
	result = params[:num1].to_i * params[:num2].to_i
	"The result is #{result}."
end