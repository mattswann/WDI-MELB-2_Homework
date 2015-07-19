require "pry"
require "sinatra"
require "sinatra/contrib/all"
require "yahoofinance"

class String
  def alpha?
    !!match(/^[[:alnum:]]+$/)
  end
end

def present?(val)
  !val.nil? && !val.empty?
end

def get_stock_quotes(val)
  # get stock information
  quote_type = YahooFinance::StandardQuote
  stocks = YahooFinance::get_quotes( quote_type, val )
  stock_list = []

  # object returned can have multiple stocks, iterate through each
  stocks.each do |stock|
    stock_items = []

    # select the methods on the YahooFinance Object that contain useful data
    list_stock = stock[1].methods.to_a.select do |item|
      item.to_s[-1] == "=" and item[0].alpha?
    end

    # per stock, create a list of useful data
    list_stock.each do |item|
      # remove the "=" from te end of each item
      key = item[0..-2].to_s
      val = stock[1].send(item[0..-2].to_sym).to_s
      stock_items.push(key + ": " + val)
    end

    # append to a list of stock-data lists
    stock_list.push(stock_items)
  end
  return stock_list
end

get '/' do
  if present? params["stock_symbol"]
    search_terms = params["stock_symbol"]
    @stock_list = get_stock_quotes(search_terms)

    # write the search query to a file
    search_history = File.open("search_history.txt", "a+") do |file|
      file.puts params["stock_symbol"]
    end

  else
    @stock_list = []
  end
  erb :index
end

get '/history' do
  @search_list = []
  search_history = File.open('search_history.txt', 'r') do |file|

    parse_file = file.read
    parse_file.gsub!(",", "%2C")

    parse_file.each_line do |line|
      @search_list.push(line)
    end
  end

  erb :history
end
