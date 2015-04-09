require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require_relative 'config'
require_relative 'dish'


get '/' do
  @dishes = Dish.all
  erb :index
end

get '/dishes' do
	@dishes = Dish.all
	erb :dishes
end

# Create new dishes
post '/dishes' do
	Dish.create( name: params[:name], image_url: params[:image_url])
	redirect to('/')
end

# Show new dishes page
get '/dishes/new' do
	erb :new
end

# Show individual dishes (edit) page
get '/dishes/:id/edit' do
	@dish = Dish.find(params[:id])
	erb :edit
end

# Update an existing dish
put '/dishes/:id' do
	@dish = Dish.find(params[:id])
	@dish.name = params[:name]
	@dish.image_url = params[:image_url]
	@dish.save
	redirect to '/'
end

# Delete an existing dish
delete '/dishes/:id/delete' do
	@dish = Dish.find(params[:id])
	@dish.delete
	redirect to '/'
end
