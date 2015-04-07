require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

get '/' do
	sql = 'SELECT * FROM dishes ORDER BY id'
	@rows = run_sql(sql)
  erb :index
end

get '/dishes' do
	sql = 'SELECT * FROM dishes ORDER BY id'
	@rows = run_sql(sql)
	erb :dishes
end

# Create new dishes
post '/dishes' do
	sql = "INSERT INTO dishes (name, image_url) VALUES ('#{params["name"]}', '#{params["image_url"]}')"
	@rows = run_sql(sql)
	redirect to('/')
end

# Show new dishes page
get '/dishes/new' do
	erb :new
end

# Show individual dishes (edit) page
get '/dishes/:id/edit' do
	sql = "SELECT * FROM dishes WHERE id = #{ params[:id] }"
	rows = run_sql(sql)
	@dish = rows[0]
	erb :edit
end

# Updated an existing dish
post '/dishes/:id' do
	sql = "UPDATE dishes SET name='#{params[:name]}', image_url='#{params[:image_url]}' WHERE id = #{params[:id]} ;"
	@rows = run_sql(sql)
	redirect to '/'
end

# Delete an existing dish
get '/dishes/:id/delete' do
	sql = "DELETE FROM dishes WHERE id = #{params[:id]} ;"
	run_sql(sql)
	redirect to '/'
end


def run_sql(sql)
	db = PG.connect(:dbname => 'goodfoodhunting')
  @rows = db.exec(sql)
  db.close
  return @rows
end