require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require 'httparty'
require 'uri'

get '/' do
  recent_searches_sql = "SELECT * FROM movies
                         WHERE poster NOT LIKE 'N/A' 
                         ORDER BY id DESC 
                         LIMIT 10;"
  @recent_five = run_sql(recent_searches_sql)
  erb :search
end

get '/search/:title' do
  url = "http://www.omdbapi.com/?s=#{ params["title"] }&y=&plot=full&r=json"
  @movies = HTTParty.get(URI.escape(url))["Search"]
  erb :movie_list
end

get '/about' do
  erb :about
end

get '/movie/:imdbID' do
  
  # determine if movie_detail information stored in DB
  check_if_cached = "SELECT * FROM movies 
                     WHERE imdbID LIKE '#{ params['imdbID'] }';"
  local_imdbID = run_sql(check_if_cached)
  if local_imdbID.count > 0
    @movie = local_imdbID.first
  else
    url = "http://www.omdbapi.com/?i=#{ params["imdbID"] }&plot=full&r=json"
    raw_movie = HTTParty.get(url)
    @movie = {}
    raw_movie.each { |k,v| @movie[k.downcase] = v.gsub("'","''") }
    add_movie = "INSERT INTO movies (title, year, rated, runtime, genre, director, actors, plot, poster, imdbID)
                 VALUES ('#{ @movie['title']        }', 
                         '#{ @movie['year'].to_i    }', 
                         '#{ @movie['rated']        }', 
                         '#{ @movie['runtime'].to_i }', 
                         '#{ @movie['genre']        }', 
                         '#{ @movie['director']     }', 
                         '#{ @movie['actors']       }', 
                         '#{ @movie['plot']         }', 
                         '#{ @movie['poster']       }',
                         '#{ @movie['imdbid']       }');"
    run_sql(add_movie)
  end
  erb :movie
end

get '/history' do
  recent_searches_sql = "SELECT * FROM movies 
                         ORDER BY id DESC 
                         LIMIT 50;"
  @recent_five = run_sql(recent_searches_sql)                      
  erb :history
end

post '/search' do
  title = URI.escape(params["title"].gsub(/\s/, '+'))
  redirect to("/search/#{ title }")
end

def run_sql(sql)
  db = PG.connect(:dbname => 'moviedb')
  rows = db.exec(sql)
  db.close
  return rows
end
