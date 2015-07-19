require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/lotto' do
  Random.rand(1..40).to_s
end

get '/api/students' do
  content_type :json
  content = {
    name: "Dom", 
    luckyNumber: 6,

  }
  content.to_json
end

get '/hi_dom' do
  result = HTTParty.get("http://localhost:4567/api/students")
  "sup #{result['name']}"
end

get '/slow' do
  "<em>haahahahhahahadlfhalsjdfhajklsdhgkjlahgahahahahahahahqhjh</em><br>" * Random.rand(1..40)
end
