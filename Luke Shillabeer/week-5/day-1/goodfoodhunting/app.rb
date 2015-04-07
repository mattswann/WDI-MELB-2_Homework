require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

get '/' do
  sql = 'SELECT * FROM dishes;'
  @rows = run_sql(sql)
  puts @rows
  erb :dishes
end

get '/dishes' do
  redirect to('/')
end

get '/dishes/add-dish' do
  erb :add_dish
end

get '/dishes/:id' do
  sql = "SELECT * FROM dishes WHERE id=#{ params[:id] };"
  @row = run_sql(sql)[0]
  erb :single_dish
end

get '/dishes/:id/edit' do
  sql = "SELECT * FROM dishes WHERE id=#{ params[:id] };"
  @row = run_sql(sql)[0]
  erb :single_dish_edit
end

#remove an existing dish
get '/dishes/:id/remove' do
  id = params['id']
  del_rows_sql = "DELETE FROM dishes WHERE id=#{ id };"
  run_sql(del_rows_sql)
  redirect to('/')
end

# create a new dish
post '/dishes' do
  name = params['name']
  image_url = params['image_url']
  add_row_sql = "INSERT INTO dishes (name, image_url) 
                 VALUES ('#{ name }','#{ image_url }');"
  get_rows_sql = 'SELECT * FROM dishes;'

  run_sql(add_row_sql)
  @rows = run_sql(get_rows_sql)
  redirect to('/')
end

# update an existing dish
post '/dishes/:id' do
  id = params['id']
  name = params['name']
  image_url = params['image_url']
  update_row_sql = "UPDATE dishes
                    SET name='#{ name }', image_url='#{ image_url }' 
                    WHERE id=#{ id };"
  run_sql(update_row_sql)
  redirect to("/dishes/#{ id }")
end

def run_sql(sql)
  db = PG.connect(:dbname => 'goodfoodhunting')
  rows = db.exec(sql)
  db.close
  return rows
end











