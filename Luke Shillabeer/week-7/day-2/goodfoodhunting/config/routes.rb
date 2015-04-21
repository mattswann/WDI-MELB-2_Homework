Rails.application.routes.draw do

  
  # dish create
  get  '/dishes/new' => 'dishes#new'
  post '/dishes'     => 'dishes#create'

  # dish update
  get  '/dishes/:id' => 'dishes#edit'
  put  '/dishes/:id' => 'dishes#update'

  #dish delete
  delete '/dishes' => 'dishes#delete'

  get '/about' => 'pages#about'
  get '/'      => 'pages#index'

end
