require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'pry'

require_relative 'config'
require_relative 'post'

get '/' do
  @posts = Post.all
  erb :index
end

get '/posts/new' do
  erb :new
end

post '/posts' do
  post = Post.new
  post.title = params[:title]
  post.body = params[:body]
  post.save
  redirect to '/'
end

