require "pry"
require "sinatra"
require "sinatra/contrib/all"

get "/" do
  erb :index
end

get "/about" do
  erb :about
end

get "/contact" do
end

get "/hello/:name" do
  "Hello #{ params['name'] }"
end
