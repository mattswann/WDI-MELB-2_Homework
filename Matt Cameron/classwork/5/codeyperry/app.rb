require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'httparty'

get '/' do
	erb :index
end

get '/lotto' do
	Random.rand(1..40).to_s
end

get '/slow' do
	sleep 3
	"<em>haha</em>" * Random.rand(1..5)
end

get '/students' do
	"dom jc beta"
end

get '/api/students' do
	content_type :json
	content = {
		name: 'dom',
		lucky_number: 6,
		currentTime: Time.now
	}

	content.to_json
end

get '/hi_dom' do
	result = HTTParty.get('http://localhost:4567/slow')
	result.to_s
end