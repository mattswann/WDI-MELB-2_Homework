require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require 'httparty'
require_relative 'config'
require_relative 'student'

get '/' do
	@students = Student.all
	erb :index
end

get '/api/students' do
	content = Student.all
	content_type :json
	content.to_json
end