Rails.application.routes.draw do

resources :dishes
resources :tags
resources :users, only: [:index, :show, :create]

# login routes
get     '/login'  => 'session#new'
post    '/login'  => 'session#create'
get     '/logout' => 'session#destroy'

#sign-up routes
get     '/signup' => 'users#new', :as => 'sign_up'

# default route
get     '/'       => 'pages#index', :as => 'root'

end
