require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
require 'pry'

get '/' do
	if !params[:stock_symbol].nil? && !params[:stock_symbol].empty?
		@stock = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock_symbol])
		@price = @stock[params[:stock_symbol]].ask
		@name = @stock[params[:stock_symbol]].name

		File.open('history.txt', 'a+') do |file|
			file.puts "#{params[:stock_symbol]}, #{@price}, #{@name}"
		end
	end
	erb :index
end

get '/history' do
	@searches = []

	File.open('history.txt', 'r') do |file|

		file.each do |line|
			@searches << line.chomp.split(', ')
		end

	end

	erb :history
end


get '/about' do
	erb :about
end