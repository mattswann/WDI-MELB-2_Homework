require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'active_record'
require 'json'

require_relative 'config'
require_relative 'student'

get '/' do
  erb :index
end

get '/api/students' do
  content_type :json
  students = Student.all.to_json
end
