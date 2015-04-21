require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require 'active_record'

require_relative 'config'
require_relative 'dish'

get '/' do
  @rows = Dish.all
  erb :dishes
end

get '/dishes' do
  redirect to('/')
end

get '/dishes/add-dish' do
  erb :add_dish
end

get '/dishes/:id' do
  @row = Dish.find params[:id]
  erb :single_dish
end

get '/dishes/:id/edit' do
  @row = Dish.find params[:id]

  erb :single_dish_edit
end

#remove an existing dish
get '/dishes/:id/remove' do
  Dish.find(params[:id]).delete
  redirect to('/')
end

# create a new dish
post '/dishes' do
  name = params['name']
  image_url = params['image_url']

  Dish.create({
    name: name,
    image_url: image_url  
  }).save

  @rows = Dish.all
  redirect to('/')
end

# update an existing dish
post '/dishes/:id' do
  id = params['id']
  name = params['name']
  image_url = params['image_url']
  update_row = Dish.find(params[:id])
  update_row.update({:name => name, :image_url => image_url})
  redirect to("/dishes/#{ id }")
end
