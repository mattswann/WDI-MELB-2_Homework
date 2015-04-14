require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require_relative 'config'
require_relative 'dish'
require_relative 'user'
require 'bcrypt'

enable :sessions

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
	redirect to '/session/new' unless current_user
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

get '/session/new' do
	erb :login
end



post '/session' do
	@user = User.where(email: params[:email]).first
	if @user && @user.authenticate(params[:password])
		session[:user_id] = @user.id
		redirect to '/'
	else
		erb :login
	end
end

delete '/session' do
	session[:user_id] = nil
	redirect to '/'
end

helpers do
	def logged_in?
		!!current_user
	end

	def current_user
			User.find_by(id: session[:user_id])
	end
end